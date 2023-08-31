import React, { Component } from "react";
import Remove from '../assets/remove.svg'
import Edit from '../assets/edit.svg'
import { toggleLink, toggleScript } from '../utils/dom.js'
import './toolbar.css'

const removeWebComponent = (e, props) => {
  props.setWebComponents(webComponents => webComponents.filter(webComponent => webComponent.props.id !== props.id ));
  props.setToolbars(toolbars => toolbars.filter(toolbar => toolbar.props.id !== props.id ));
  props.setCount(count => {
    const updatedCount = count - 1 >= 0 ? count - 1 : 0;
    updatedCount === 0 && props?.link && toggleLink(props.link);
    updatedCount === 0 && props?.script && toggleScript(props.script);
    return updatedCount;
  });
  props.setEditMode(false);
}

const editWebComponent = (e, props) => {
  props.setEditMode(editMode => !editMode);
  props.setEditOptions(props.options);
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