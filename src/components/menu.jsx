import React, { Component, useState } from "react";
import { Link } from 'react-router-dom'
import Copy from '../assets/copy.svg';
import Home from '../assets/home.svg';
import Checkbox from './checkbox.jsx';
import Increment from './increment.jsx';
import Formats from './formats.jsx';
import './menu.css'


const Menu = (props) => {

  return (
    <>
      <div className="tool-menu">
      	<div className="tool-topper">
      		<Link to="/">
	      		<button>
	      			<img src={Home} alt="Home"/>
	      		</button>
	      	</Link>
      	</div>
      	<div className="tool-sections">
	        <div className="tool-section">
	        	<h3 className="tool-h3">Screen</h3>
	        	<Formats/>
	        </div>

	        {/* TODO: themes and enhancements can be destructive to the page so that simply adding/subtracting scripts is not going to cut it. 
	          	Better to manage state and refresh page from base + themes + enhancemnts + cards etc when adding/removing an item
	        */}
	        {/* TODO: work on component naming and organization - Checkbox is doing way more than the checkbox part.... Same with Increment....*/}
	        {/* Themes */}
	        <div className="tool-section">
	        	<h3 className="tool-h3">Themes</h3>
	        	<Checkbox
	        		label="Dark"
	        		link="https://storage.googleapis.com/mc-high-impact/2023/broken-government/dark.css"
	        	/>
			      <Checkbox
			      	label="Declutter"
	        		link="https://www.miamiherald.com/static/hi/themes/declutter.css"
	        		script="https://www.miamiherald.com/static/hi/themes/declutter.js"
			      />
	        </div>

	        {/* TODO: figure out how to tie these configs to actual internal libraries or master document for enhancements/cards/etc */}
	        {/* TODO: centralize and officialize the functions / scripts actually used by the graphics team */}
	        {/* TODO: instead of enhancements being standalone scripts, call the actual functions (then options can be accessed easily) */}
	        {/* Enhancements */}
	        <div className="tool-section">
	        	<h3 className="tool-h3">Enhancements</h3>
	        	<Checkbox
	        		label="minimalHeader"
	        		link="https://www.miamiherald.com/static/hi/2023/broken-government/topper-minimalist.css"
	        		script="https://www.miamiherald.com/static/hi//2023/broken-government/topper-minimalist.js"
	        	/>
			      {/*<Checkbox label="minimalFooter"/>*/}
			      {/*<Checkbox
			      	label="moveLeadArtToTop"
							script="https://www.miamiherald.com/static/hi/2023/broken-government/lead-cue.js"
			      />*/}
			      {/*<Checkbox label="removeAds"/>*/}
	        </div>

	        {/* Cards */}
	        <div className="tool-section">
	        	<h3 className="tool-h3">Cards</h3>
	        	<Increment
	        		label="block-quote"
	        		script="https://www.miamiherald.com/static/hi/cards/block-quote/block-quote.js"
	        		defaultOptions={{
	        			"data-quote": {
	        				"label": "Quote",
	        				"value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
	        				"type": "text"
	        			},
	        			"data-attribution": {
	        				"label": "Attribution",
	        				"value": "Cicero",
	        				"type": "text"
	        			},
	        			"data-color": {
	        				"label": "Color",
	        				"value": "#00008b",
	        				"type": "color"
	        			},
	        			"data-max-width": {
	        				"label": "Quote Max Width",
	        				"value": "600",
	        				"type": "range",
	        				"unit": "px",
	        				"min": "300",
	        				"max": "700"
	        			},
	        			"data-attribution-max-width": {
	        				"label": "Attribution Max Width",
	        				"value": "400",
	        				"type": "range",
	        				"unit": "px",
	        				"min": "300",
	        				"max": "700"
	        			}
	        		}}

	        		editMode={props.editMode}
	        		setEditMode={props.setEditMode}

	        		editOptions={props.editOptions}
	        		setEditOptions={props.setEditOptions}

	        		toolbars={props.toolbars}
	        		setToolbars={props.setToolbars}

	        		webComponents={props.webComponents}
	        		setWebComponents={props.setWebComponents}
	        	/>
			      <Increment
			      	label="outro-text"
			      	script="https://www.miamiherald.com/static/hi/2023/devalos-perkins/outro-text.js"
			      	link="https://www.miamiherald.com/static/hi/2023/devalos-perkins/outro-text.css"
	        		defaultOptions={{
	        			"slot": {
	        				"label": "Text",
	        				"options": ["h5", "p"],
	        				"value": [
	        					"<h5>Sources</h5>",
										"<p>Scenes not witnessed by the reporter in this series were compiled from research, interviews and public records including documents from the Mecklenburg County Detention Center and Clerk of Superior Court.</p>",
										"<h5>Credits</h5>",
										"<p>Kallie Cox | Reporter</p>",
										"<p>Anna Douglas | Editor</p>",
										"<p>Rachel Handley | Illustrations & Design</p> ",
										"<p>Gabby McCall | Page Design</p>",
										"<p>David Newcomb | Development & Design</p>"
	        				],
	        				"type": "text-item"
	        			}
	        		}}

	        		editMode={props.editMode}
	        		setEditMode={props.setEditMode}

	        		editOptions={props.editOptions}
	        		setEditOptions={props.setEditOptions}

	        		toolbars={props.toolbars}
	        		setToolbars={props.setToolbars}

	        		webComponents={props.webComponents}
	        		setWebComponents={props.setWebComponents}
			      />
			      <Increment label="summary-list"
			      	script="https://www.miamiherald.com/static/hi/2023/broken-government/summary-list.js"
			      	link="https://www.miamiherald.com/static/hi/2023/broken-government/summary-list.css"
	        		defaultOptions={{
	        			"data-title": {
	        				"label": "Title",
	        				"value": "Summary of Items",
	        				"type": "text"
	        			},
	        			"data-subtitle": {
	        				"label": "Subtitle",
	        				"value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat sapien eu sem mollis, non vehicula tortor malesuada.",
	        				"type": "text"
	        			},
	        			"slot": {
	        				"label": "Text",
	        				"options": ["li"],
	        				"value": [
	        					"<li>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</li>",
	        					"<li>Cras ut neque a orci vulputate sollicitudin. Mauris convallis orci vitae semper vehicula.</li>",
	        					"<li>Donec vestibulum, neque at facilisis maximus, felis lectus condimentum ex, et laoreet nulla dolor vitae urna.</li>",
	        					"<li>Fusce ut mi faucibus, ultrices ante a, imperdiet quam. Etiam a sem at leo condimentum pretium sit amet ut lacus.</li>"
	        				],
	        				"type": "text-item"
	        			},
	        			"data-border-color": {
	        				"label": "Border Color",
	        				"value": "#00000088",
	        				"type": "color"
	        			},
	        			"data-list-style": {
	        				"label": "List Style",
	        				"value": "ul",
	        				"options": [{"label": "Numbered", "value": "ol"}, {"label": "Bulleted", "value": "ul"}],
	        				"type": "switch"
	        			}
	        		}}

	        		editMode={props.editMode}
	        		setEditMode={props.setEditMode}

	        		editOptions={props.editOptions}
	        		setEditOptions={props.setEditOptions}

	        		toolbars={props.toolbars}
	        		setToolbars={props.setToolbars}

	        		webComponents={props.webComponents}
	        		setWebComponents={props.setWebComponents}
			      />
	        </div>

	        {/* TODO: will be cool, will need to add functionality to upload data (1) locally and (2) eventually in the bucket (CSV Google Sheets upload)? */}
	        {/* Charts */}
	        {/*<div className="section">
	        	<h3>Charts</h3>
        	</div>*/}
        </div>
        <div
        	className="tool-footer"
        	style={{
        		pointerEvents: (props.webComponents.length > 0) ? 'all' : 'none'
        	}}
        >
      		<button
      			onClick={(e) => { props.setCopyMode(true); }}
	        	style={{
	        		opacity: (props.webComponents.length) > 0 ? 1 : 0.25
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

