import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Minus from '../assets/minus.svg';

const textItem = (props) => {
  const [textValue, setTextValue] = useState(props.item);

  const updateValue = (e, index) => {
    e.preventDefault();
    props.value[index] = e.target.value;
    props.setValue(props.value);
    props.setTextItems(props.value)
    props.setEditOptions(editOptions => {
      editOptions[props.editKey]["value"] = props.value
      return editOptions;
    });
    setTextValue(e.target.value);    
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

	return (
    <div className="tool-edit-text-item">
      <TextareaAutosize
        value={textValue}
        className="tool-modal-value"
        onChange={(e) => { updateValue(e, props.updateIndex); }}
        spellCheck="false"
      ></TextareaAutosize>
      <div className="tool-remove-text-item">
        <button>
          <img src={Minus} alt="remove" onClick={(e) => { removeValue(e, props.updateIndex); }}/>
        </button>
      </div>
    </div>
  )
}

export default textItem;