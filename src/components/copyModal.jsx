import React, { Component } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Input from './input.jsx'
import Copy from '../assets/copy.svg'
import Remove from '../assets/remove.svg'
import { getElementByIdPrefix, getToolLinks, getToolScripts } from "../utils/dom.js"
import { beautifyHTML, cleanHTML, makePathRelative, removeVersionString } from "../utils/html.js"
import { getExternalStyleFromOptions } from "../utils/style.js";
import "./copyModal.css"

class CopyModal extends React.Component {
  constructor(props) {
    super(props);
    this.embedRelatedId = "tool-embed-related"
  }

  render() {
		// Trying to exclude links and scripts that come from webComponents
		const linksToExclude = this.props.webComponents ? this.props.webComponents.map(webComponent => webComponent.props?.link) : [];
		const scriptsToExclude = this.props.webComponents ? this.props.webComponents.map(webComponent => webComponent.props?.script) : [];
		const linksAndScripts = getLinksAndScripts(linksToExclude, scriptsToExclude);

  	// TODO: stop accessing the DOM probably and use state instead
  	function getScripts(exclude=[]) {
			const scripts = getToolScripts();
			const scriptsString = scripts.filter(script => !exclude.includes(removeVersionString(script.src)))
				.map((script) => cleanHTML(script.outerHTML) ).join("\n");
			return scriptsString;
		}

		function getLinks(exclude=[]) {
			const links = getToolLinks();
			const linksString = links.filter(link => !exclude.includes(removeVersionString(link.href)))
				.map((link) => cleanHTML(link.outerHTML) ).join("\n");
			return linksString;
		}

		function getLinksAndScripts(linksToExclude, scriptsToExclude) {
			const links = getLinks(linksToExclude);
			const scripts = getScripts(scriptsToExclude);
			return [links, scripts].filter(i => i).join("\n\n");
		}

		function copy(e, id) {
			e.target.classList.toggle("active");
		  let copyText = document.getElementById(id);
		  copyText.select();
		  document.execCommand("copy");
		  setTimeout(function () {
	       e.target.classList.toggle("active");
	    }, 1000);
		}

    return(
      <div className="tool-modal tool-copy-modal" style={{display: this.props.copyMode ? 'block' : 'none' }}>

        <div className="tool-modal-inner">
	        <div className="tool-modal-topper">
	          <div className="tool-title">Copy</div>
	          <img className="tool-remove" src={Remove} alt="remove" onClick={(e) => { this.props.setCopyMode(false); }}/>
	        </div>
          <div className="tool-modal-spacer"></div>

	        {/*Related: Scripts and Links*/}
	        <div className="tool-modal-wrapper" style={{display: linksAndScripts.length > 0 ? "block": 'none'}}>
			      <div className="tool-copy-header">
			      	<div className="tool-copy-icon-container" onClick={(e) => { copy(e, this.embedRelatedId); }}>
			      		<img className="tool-copy-icon" src={Copy} alt="copy"/>
			      	</div>
			      	<div className="tool-modal-label">Related</div>
			      </div>
		        <TextareaAutosize 
		        	id={this.embedRelatedId}
		          value={linksAndScripts}
		          className="monospace tool-copy-text"
		          spellCheck="false"
		          readOnly={true}
		        />
	       	</div>


	        {/* Body: Cards */}
	        {this.props.webComponents && this.props.webComponents.map((webComponent, i) => {
	        	let script = webComponent.props?.script ? cleanHTML(`<script type="module" src="${webComponent.props?.script}"></script>\n`) : "";
	        	let link = webComponent.props?.link ? cleanHTML(`<link rel="stylesheet" href="${webComponent.props?.link}">\n`) : "";
	        	let options = webComponent.props.options;
	        	let element = getElementByIdPrefix(webComponent.props.id);
	      		if (element && !webComponent.props.options?.slot) {
	        		element.innerHTML = ''
	        	}
	        	const attributesToRemove = Object.keys(options).filter(key => options[key]?.exclude).concat(['id'])
	        	attributesToRemove.forEach(attribute => element && element.removeAttribute(attribute));

	        	// TODO: Remove inline styles from children? Seems useful for scrolling-video. Need to see if it scales...
	        	element?.children && Array.from(element.children).forEach(child => child.removeAttribute("style"))
	        	const html = element?.outerHTML;
	        	const textId = `tool-embed-${webComponent.props.id}`;
	        	const style = getExternalStyleFromOptions(options);

	          return (
	          	<div className="tool-modal-wrapper" key={i}>
		          	<div className="tool-copy-header">
						      <div className="tool-copy-icon-container" onClick={(e) => { copy(e, textId); }}>
				      			<img className="tool-copy-icon" src={Copy} alt="copy"/>
				      		</div>
				      		<div className="tool-modal-label">{webComponent.props.id}</div>
				      	</div>
	              <TextareaAutosize 
	              	id={textId}
		              value={makePathRelative(script + link + "\n" + beautifyHTML(html)) + `${style ? "\n" + beautifyHTML(style) : ""}`}
			            className="monospace tool-copy-text"
			            spellCheck="false"
			            readOnly={true}
		            />
					    </div>

	          )
	        })}
	      </div>
	    </div>
    )
  }
}

export default CopyModal;
