import React, { Component } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Input from './input.jsx'
import Remove from '../assets/remove.svg'
import { getToolLinks, getToolScripts } from "../utils/dom.js"
import "./copyModal.css"


// TEXT
// COLOR
// SLIDER
// CHECKBOX

function formatHTML(html) {
	if (!html) {
		return html;
	}
  var tab = '\t';
  var result = '';
  var indent= '';

  html.split(/>\s*</).forEach(function(element) {
      if (element.match( /^\/\w/ )) {
          indent = indent.substring(tab.length);
      }

      result += indent + '<' + element + '>\r';

      if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
          indent += tab;              
      }
  });

  return result.substring(1, result.length-2).replace(/^/gm, '\t');
}

function formatAttributes(input) {
	if (!input) {
		return input;
	}

  // Use a regular expression to match spaces between attributes and replace them with newlines and indentation
  const formattedInput = input.replace(/ ([^\s>]+=)/g, '\n  $1');

  // Move the closing tag and caret to their own lines
  const finalFormattedInput = formattedInput.replace(/">/g, '"\n>').replace(/<\//g, '\n</');

  // Add an extra newline after the closing tag
  return finalFormattedInput;
}

function beautifyHTML(html) {
	if (!html) {
		return html;
	}
	const flatHTML = html.replaceAll("\n", " ");
	const regex = /<([a-zA-Z0-9-]+)(?:[^>]+)>(.*?)<\/\1>/;
	const match = flatHTML.match(regex);

	if (match) {
	  const openingTag = `<${match[0].match(/<[^>]+>/)[0].slice(1, -1)}>`;
	  const extractedContent = match[2];
	  const closingTag = `</${match[1]}>`;

	  const formattedOpeningTag = formatAttributes(openingTag);
		const formattedContent = extractedContent ? `${formatHTML(extractedContent)}` : null;
		return [formattedOpeningTag, formattedContent, closingTag].filter(i => i).join("\n");
	}
}

function cleanHTML(html) {
	if (!html) return html;
	html = makePathRelative(html);
	html = removeVersion(html);
	html = removeId(html);
	html = removeBlankLines(html);
	return html;
}

function makePathRelative(html) {
	if (!html) return html;
	return html.replaceAll(/"(http|www)(.*?)\/static/g, '"/static')
}

function removeVersion(html) {
	return html.replaceAll(/\?v(.*?)"/g, '"')
}

function removeId(html) {
	return html.replace(/id=\"(.*?)\"/g, "").replace(" >", ">")
}

function removeBlankLines(html) {
	return html.replace(/^\s*[\r\n]/gm, "");
}

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
