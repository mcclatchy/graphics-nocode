import React, { Component } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Input from './input.jsx'
import Copy from '../assets/copy.svg'
import Remove from '../assets/remove.svg'
import { getElementByIdPrefix, getToolLinks, getToolScripts } from "../utils/dom.js"
import { beautifyHTML, cleanHTML, makePathRelative } from "../utils/html.js"
import "./copyModal.css"

class CopyModal extends React.Component {
  constructor(props) {
    super(props);
    this.embedRelatedId = "tool-embed-related"
  }

  render() {
  	// TODO: stop accessing the DOM probably and use state instead
  	function getScripts() {
			const scripts = getToolScripts();
			const scriptsString = scripts.map((script) => cleanHTML(script.outerHTML) ).join("\n");
			return scriptsString;
		}

		function getLinks() {
			const links = getToolLinks();
			const linksString = links.map((link) => cleanHTML(link.outerHTML) ).join("\n");
			return linksString;
		}

		function getLinksAndScripts() {
			const links = getLinks();
			const scripts = getScripts();
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
	        <div className="tool-modal-wrapper">
			      <div className="tool-copy-header">
			      	<div className="tool-modal-label">Related</div>
			      	<div className="tool-copy-icon-container" onClick={(e) => { copy(e, this.embedRelatedId); }}>
			      		<img className="tool-copy-icon" src={Copy} alt="copy"/>
			      	</div>
			      </div>
		        <TextareaAutosize 
		        	id={this.embedRelatedId}
		          value={getLinksAndScripts()}
		          className="monospace tool-copy-text"
		          spellCheck="false"
		          readOnly={true}
		        />
	       	</div>


	        {/* Body: Cards */}
	        {this.props.webComponents && this.props.webComponents.map((webComponent, i) => {
	        	let element = getElementByIdPrefix(webComponent.props.id);
	      		if (element && !webComponent.props.options?.slot) {
	        		element.innerHTML = ''
	        	}
	        	element && element.removeAttribute('id');
	        	const html = element?.outerHTML;
	        	const textId = `tool-embed-${webComponent.props.id}`;
	          return (
	          	<div className="tool-modal-wrapper" key={i}>
		          	<div className="tool-copy-header">
						      <div className="tool-modal-label">{webComponent.props.id}</div>
						      <div className="tool-copy-icon-container" onClick={(e) => { copy(e, textId); }}>
				      			<img className="tool-copy-icon" src={Copy} alt="copy"/>
				      		</div>
				      	</div>
	              <TextareaAutosize 
	              	id={textId}
		              defaultValue={makePathRelative(beautifyHTML(html))}
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
