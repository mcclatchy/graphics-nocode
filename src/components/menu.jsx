import React, { Component, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Copy from '../assets/copy.svg';
import Home from '../assets/home.svg';
import Checkbox from './checkbox.jsx';
import Increment from './increment.jsx';
import Formats from './formats.jsx';
import { removeToolLinks, removeToolScripts } from '../utils/dom.js'
import './menu.css'


const Menu = (props) => {
	function getComponent(item) {
		if (item.type === "checkbox") {
			return (
				<Checkbox
					key={item.label}
      		label={item.label}
      		link={item.link}
      		script={item.script}
      		setLinks={props.setLinks}
      		setScripts={props.setScripts}
      	/>
      )
		} else if (item.type === "increment") {
			return (
				<Increment
					key={item.label}
	      	label={item.label}
	      	maxCount={item.maxCount}
	      	script={item.script}
	      	link={item.link}
	    		defaultOptions={item.defaultOptions}

	    		editMode={props.editMode}
	    		setEditMode={props.setEditMode}

	    		editOptions={props.editOptions}
	    		setEditOptions={props.setEditOptions}

	    		toolbars={props.toolbars}
	    		setToolbars={props.setToolbars}

	    		webComponents={props.webComponents}
	    		setWebComponents={props.setWebComponents}

	    		setLinks={props.setLinks}
	    		setScripts={props.setScripts}
	      />
	    )
		}
	}

  return (
    <>
      <div className="tool-menu">
      	<div className="tool-menu-overlay" style={{display: props.copyMode || props.editMode ? 'block' : 'none' }}></div>
      	<div className="tool-topper">
      		<Link to="/">
	      		<button 
	      			onClick={(e) => { 
		      			removeToolLinks();
		      			removeToolScripts(); 
		      		}}
		      	>
	      			<img src={Home} alt="Home"/>
	      		</button>
	      	</Link>
      	</div>
      	<div className="tool-sections">
	        <div className="tool-section">
	        	<h3 className="tool-h3">Screen</h3>
	        	<Formats/>
	        </div>

	        {/* TODO: work on component naming and organization - Checkbox is doing way more than the checkbox part.... Same with Increment....*/}
	        {/* Themes */}
	        {props.config['themes'].length ?
		        <div className="tool-section">
		        	<h3 className="tool-h3">Themes</h3>
		        	{props.config['themes'].map(item => getComponent(item, props))}
		        </div>
	         : ""
					}

	        {/* TODO: figure out how to tie these configs to actual internal libraries or master document for enhancements/cards/etc */}
	        {/* TODO: centralize and officialize the functions / scripts actually used by the graphics team */}
	        {/* TODO: instead of enhancements being standalone scripts, call the actual functions (then options can be accessed easily) */}
	        {/* Enhancements */}
	        {props.config['enhancements'].length ?
		        <div className="tool-section">
		        	<h3 className="tool-h3">Enhancements</h3>
				      {props.config['enhancements'].map(item => getComponent(item, props))}
		        </div>
		        : ""
					}

	        {/* Lead Cards */}
	        {props.config['lead-cards'].length ?
		        <div className="tool-section">
		        	<h3 className="tool-h3">Lead Cards</h3>
							{props.config['lead-cards'].map(item => getComponent(item, props))}
		        </div>
	         : ""
					}

	        {/* Text Cards */}
	        {props.config['text-cards'].length ?
		        <div className="tool-section">
		        	<h3 className="tool-h3">Text Cards</h3>
		        	{props.config['text-cards'].map(item => getComponent(item, props))}
		        </div>
	         : ""
					}

	        {/* Media Cards */}
	        {props.config['media-cards'].length ?
		        <div className="tool-section">
		        	<h3 className="tool-h3">Media Cards</h3>
		        	{props.config['media-cards'].map(item => getComponent(item, props))}
		        </div> : ""
					}

					{/* Graphics */}
					{props.config['graphics'].length ?
						<div className="tool-section">
		        	<h3 className="tool-h3">Graphics</h3>
		        	{props.config['graphics'].map(item => getComponent(item, props))}
		      	</div> : ""
					}
	        
	        {/* TODO: will be cool, will need to add functionality to upload data (1) locally and (2) eventually in the bucket (CSV Google Sheets upload)? */}
	        {/* Charts */}
	        {/*<div className="section">
	        	<h3>Charts</h3>
        	</div>*/}
        </div>

        <div
        	className="tool-footer"
        	style={{
        		pointerEvents: (props.scripts.length > 0 || props.links.length > 0 || props.webComponents.length > 0) ? 'all' : 'none'
        	}}
        >
      		<button
      			onClick={(e) => { props.setCopyMode(true); }}
	        	style={{
	        		opacity: (props.scripts.length > 0 || props.links.length > 0 || props.webComponents.length) > 0 ? 1 : 0.25
	        	}}
      		>
      			<img src={Copy} alt="Copy" className="icon-copy"/>
      			<p className="tool-copy">Copy CUE Embeds</p>
      		</button>
      	</div>
      </div>
    </>
  )
}

export default Menu;

