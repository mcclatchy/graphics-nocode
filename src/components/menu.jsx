import React, { Component, useState } from "react";
import { Link } from 'react-router-dom'
import Copy from '../assets/copy.svg';
import Home from '../assets/home.svg';
import Checkbox from './checkbox.jsx';
import Increment from './increment.jsx';
import Formats from './formats.jsx';
import { removeToolLinks, removeToolScripts } from '../utils/dom.js'
import './menu.css'


const Menu = (props) => {

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
	        <div className="tool-section">
	        	<h3 className="tool-h3">Themes</h3>
	        	<Checkbox
	        		label="Dark"
	        		link="https://www.miamiherald.com/static/hi/2023/broken-government/dark.css"
	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
	        	/>
			      <Checkbox
			      	label="Declutter"
	        		link="https://www.miamiherald.com/static/hi/themes/declutter.css"
	        		script="https://www.miamiherald.com/static/hi/themes/declutter.js"
	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
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
	        		script="https://www.miamiherald.com/static/hi/2023/broken-government/topper-minimalist.js"
	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
	        	/>
			      <Checkbox
			      	label="minimalFooter"
							link="https://www.miamiherald.com/static/hi/2023/broken-government/minimal-footer.css"
	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
			      />
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

	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
	        	/>
	        	<Increment
	        		label="event-timeline"
	        		script="https://www.miamiherald.com/static/hi/cards/event-timeline/event-timeline.js"
	        		defaultOptions={{
	        			"data-title": {
	        				"label": "Title",
	        				"value": "Gone but not forgotten",
	        				"type": "text"
	        			},
	        			"data-subtitle": {
	        				"label": "Subtitle",
	        				"value": "A decade of efforts to bring journalist Austin Tice home from Syria",
	        				"type": "text"
	        			},
	        			"data-sheet": {
	        				"label": "Sheet",
	        				"value": "https://www.miamiherald.com/static/hi/prodx/sheet-data/1npUIJTdZLX9tgM01AX1oNBKfpejCpXSMU8Seim8Msdo.json",
	        				"type": "text"
	        			},
	        			"data-expanded": {
	        				"label": "Style",
	        				"value": null,
	        				"options": [{"label": "Collapsed", "value": null}, {"label": "Expanded", "value": "true"}],
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

	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
	        	/>
			      <Increment
			      	label="link-preview"
			      	script="https://www.miamiherald.com/static/hi/cards/link-preview/link-preview.js"
	        		defaultOptions={{
	        			"data-series": {
	        				"label": "Series",
	        				"value": "Made in Miami",
	        				"type": "text"
	        			},
	        			"data-title": {
	        				"label": "Title",
	        				"value": "A rogue's gallery of suspects",
	        				"type": "text"
	        			},
	        			"data-summary": {
	        				"label": "Summary",
	        				"value": "Investigators in at least three countries are sorting through a rogues’ gallery of players, trying to determine how the killing of Haitian President Jovenel Moïse was carried out on July 7, 2021.",
	        				"type": "text"
	        			},
	        			"data-color": {
	        				"label": "Color",
	        				"value": "#424242",
	        				"type": "color"
	        			},
	        			"data-link": {
	        				"label": "Link URL",
	        				"value": "https://www.miamiherald.com/news/nation-world/world/americas/haiti/article266152901.html",
	        				"type": "text"
	        			},
	        			"data-img": {
	        				"label": "Image URL",
	        				"value": "https://www.miamiherald.com/static/hi/2022/haiti-assassination/assets/network-outlink.jpg",
	        				"type": "text"
	        			},
	        			"data-alt": {
	        				"label": "Alt Text",
	        				"value": "Illustration of Jovenel Moïse in a network graphic node with a network of other illustrated profiles surrounding him",
	        				"type": "text"
	        			},
	        		}}

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
			      <Increment
			      	label="outro-text"
			      	script="https://www.miamiherald.com/static/hi/2023/devalos-perkins/outro-text.js"
			      	link="https://www.miamiherald.com/static/hi/2023/devalos-perkins/outro-text.css"
	        		defaultOptions={{
	        			"slot": {
	        				"label": "Text",
	        				"options": ["h5", "p"],
	        				"value": [
										{
											"tag": "h5",
											"text": "Sources"
										},
										{
											"tag": "p",
											"text": "Scenes not witnessed by the reporter in this series were compiled from research, interviews and public records including documents from the Mecklenburg County Detention Center and Clerk of Superior Court."
										},
										{
											"tag": "h5",
											"text": "Credits"
										},
										{
											"tag": "p",
											"text": "Kallie Cox | Reporter"
										},
										{
											"tag": "p",
											"text": "Anna Douglas | Editor"
										},
										{
											"tag": "p",
											"text": "Rachel Handley | Illustrations & Design"
										},
										{
											"tag": "p",
											"text": "Gabby McCall | Page Design"
										},
										{
											"tag": "p",
											"text": "David Newcomb | Development & Design"
										}
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

	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
			      />
			      <Increment
			      	label="summary-list"
			      	script="https://www.miamiherald.com/static/hi/2023/broken-government/summary-list.js"
			      	link="https://www.miamiherald.com/static/hi/2023/broken-government/summary-list.css"
	        		defaultOptions={{
	        			"data-list-style": {
	        				"label": "List Style",
	        				"value": "ul",
	        				"options": [{"label": "Bulleted", "value": "ul"}, {"label": "Numbered", "value": "ol"}],
	        				"type": "switch"
	        			},
	        			"data-border-color": {
	        				"label": "Border Color",
	        				"value": "#777777",
	        				"type": "color"
	        			},
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
	        					{
											"tag": "li",
											"text": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
										},
										{
											"tag": "li",
											"text": "Cras ut neque a orci vulputate sollicitudin. Mauris convallis orci vitae semper vehicula."
										},
										{
											"tag": "li",
											"text": "Donec vestibulum, neque at facilisis maximus, felis lectus condimentum ex, et laoreet nulla dolor vitae urna."
										},
										{
											"tag": "li",
											"text": "Fusce ut mi faucibus, ultrices ante a, imperdiet quam. Etiam a sem at leo condimentum pretium sit amet ut lacus."
										}
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

	        		setLinks={props.setLinks}
	        		setScripts={props.setScripts}
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

