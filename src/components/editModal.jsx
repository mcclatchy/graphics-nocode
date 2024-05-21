import React, { Component } from "react";
import Input from './input.jsx'
import Remove from '../assets/remove.svg'
import "./editModal.css"
 
// TEXT
// COLOR
// SLIDER
// CHECKBOX

class EditModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="tool-modal" style={{display: this.props.editMode ? 'block' : 'none' }}>
        <div className="tool-modal-inner">
          <div className="tool-modal-topper">
            <div className="tool-title">Edit</div>
            <img
              className="tool-remove"
              src={Remove}
              alt="remove"
              onClick={(e) => { 
                this.props.setEditMode(false);
                this.props.setEditOptions({});
              }}
            />
          </div>
          <div className="tool-modal-spacer"></div>
          {this.props.editOptions && Object.keys(this.props.editOptions).map((key, i) => {
            if (this.props.editOptions[key].hide) return;
            return (
              <Input 
                key={i}
                editKey={key}
                editOptions={this.props.editOptions}
                setEditOptions={this.props.setEditOptions}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default EditModal;
