import React, { Component } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Input from './input.jsx'
import Remove from '../assets/remove.svg'
import { getToolLinks, getToolScripts } from "../utils/dom.js"
import { beautifyHTML, cleanHTML, makePathRelative } from "../utils/html.js"
import "./copyModal.css"

class CopyModal extends React.Component {
  constructor(props) {
    super(props);
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
			      <div className="tool-modal-label">Related</div>
		        <TextareaAutosize 
		          value={getLinksAndScripts()}
		          className="monospace tool-copy-text"
		          spellCheck="false"
		          readOnly={true}
		        />
	       	</div>


	        {/* Body: Cards */}
	        {this.props.webComponents && this.props.webComponents.map((webComponent, i) => {
	        	let element = document.getElementById(webComponent.props.id);
	      		if (element && !webComponent.props.options?.slot) {
	        		element.innerHTML = ''
	        	}
	        	const html = element?.outerHTML;
	          return (
	          	<div className="tool-modal-wrapper" key={i}>
					      <div className="tool-modal-label">{webComponent.props.id}</div>
	              <TextareaAutosize 
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
