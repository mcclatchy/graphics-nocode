import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Minus from '../assets/minus.svg';
import './textItem.css'

const textItem = (props) => {
  const [textValue, setTextValue] = useState(props.item.text);
  const [tagValue, setTagValue] = useState(props.item.tag);
  const [attributesValue, setAttributesValue] = useState(props.item.attributes || {});

  const updateValue = (e, index) => {
    e.preventDefault();
    props.value[index]["text"] = e.target.value;
    props.setValue(props.value);
    props.setTextItems(props.value)
    props.setEditOptions(editOptions => {
      editOptions[props.editKey]["value"] = props.value
      return editOptions;
    });
    setTextValue(e.target.value);    
  }

  const updateAttribute = (e, index, field) => {
    e.preventDefault();
    props.value[index].attributes[field].value = e.target.value;
    props.setValue(props.value);
    props.setTextItems(props.value)
    props.setEditOptions(editOptions => {
      editOptions[props.editKey]["value"] = props.value
      return editOptions;
    });
    const clone = structuredClone(props.value[index].attributes);

    setAttributesValue(clone); 
  }

  const updateTag = (e, index) => {
    e.preventDefault();
    props.value[index].tag = e.target.value;
    props.setValue(props.value);
    props.setTextItems(props.value)
    props.setEditOptions(editOptions => {
      editOptions[props.editKey]["value"] = props.value
      return editOptions;
    });
    setTagValue(e.target.value);  
  }

  const removeValue = (e, index) => {
    e.preventDefault();
    const updatedValue = props.value.filter((item, i) => i !== index );
    props.setValue(updatedValue);
    props.setTextItems(updatedValue)
    props.setEditOptions(editOptions => {
      editOptions[props.editKey]["value"] = updatedValue
      return editOptions;
    });
  }

  const options = props.editOptions[props.editKey]["options"];

	return (
    <div className="tool-edit-text-item" key={`${props.item}-${props.updateIndex}`}>
      {options.length > 1 ? 
        <select
          value={props.item.tag}
          onChange={e => { updateTag(e, props.updateIndex); }}
        >
          {options.map(option => {
            return <option value={option} key={option}>{option}</option>
          })}
        </select> :
        ""
      }
      <div className="tool-text-item-inputs">

        {Object.keys(attributesValue).map(attribute => {
          return(
            <div className="tool-text-item-attribute" key={attribute}>
              <div className="tool-text-item-attribute-title-wrapper">
                <p className="tool-text-item-attribute-title">{attributesValue[attribute].label}</p>
              </div>
              <TextareaAutosize
                onHeightChange={e => { rowHeight: 22 }}
                value={attributesValue[attribute].value}
                className="tool-modal-value"
                onChange={e => { updateAttribute(e, props.updateIndex, attribute); }}
                spellCheck="false"
              ></TextareaAutosize>
            </div>
          )
        })}
        
        <TextareaAutosize
          value={props.item.text}
          className="tool-modal-value"
          onChange={e => { updateValue(e, props.updateIndex); }}
          spellCheck="false"
        ></TextareaAutosize>

      </div>

      <div className="tool-remove-text-item" onClick={e => { removeValue(e, props.updateIndex); }}>
        <button>
          <img src={Minus} alt="remove"/>
        </button>
      </div>
    </div>
  )
}

export default textItem;