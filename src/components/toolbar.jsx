import React, { Component } from "react";
import Remove from '../assets/remove.svg'
import Edit from '../assets/edit.svg'
import Help from '../assets/help.svg'
import { updateArray } from '../utils/array.js'
import './toolbar.css'

const removeWebComponent = (e, props) => {
  props.setWebComponents(webComponents => webComponents.filter(webComponent => webComponent.props.id !== props.id ));
  props.setToolbars(toolbars => toolbars.filter(toolbar => toolbar.props.id !== props.id ));
  props.setCount(count => {
    const updatedCount = count - 1 >= 0 ? count - 1 : 0;
    return updatedCount;
  });
  props.count === 0 && props?.link && props.setLinks(links => updateArray(links, props.link, false) );
  props.count === 0 && props?.script && props.setScripts(scripts => updateArray(scripts, props.script, false) );
  props.setEditMode(false);
}

const editWebComponent = (e, props) => {
  props.setEditMode(editMode => !editMode);
  props.setEditOptions(props.options);
}

const helpWebComponent = (e, props) => {
  e.preventDefault();
  const url = "https://github.com/mcclatchy/graphics-nocode/?tab=readme-ov-file"
  window.open(url, 'blank');
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return(
      <div className="card-toolbar">
        <img
          src={Edit}
          alt="edit"
          onClick={(e) => { 
            editWebComponent(e, this.props) 
          }}
          // TODO: figure out how to deal with dark mode in the tool better?
          // style={{filter: document.getElementById("link-dark") ? "invert(1)" : ""}}
        />
         <img 
          src={Help} 
          alt="help"
          onClick={(e) => { 
            helpWebComponent(e, this.props);
            
          }}
        />
        <img 
          src={Remove} 
          alt="remove"
          onClick={(e) => { 
            removeWebComponent(e, this.props); 
          }}
        />

      </div>
    )
  }
}

export default Toolbar;