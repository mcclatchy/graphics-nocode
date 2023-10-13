import { useState } from "react";
import TextItem from './textItem.jsx'
import Plus from '../assets/plus.svg';
import './textItems.css'

const textItems = (props) => {
  const [textItems, setTextItems] = useState(props.value);

  const addTextItem = () => {
    const tagOptions = props.editOptions[props.editKey].options;

    // TODO: Need to find a clean way to map things out here
    // Probably means in the menu file I need to define schema more clearly for each attribute
    // That way I can pass along things like type and label
    let attributes = {};
    props.editOptions[props.editKey].attributes.map(attribute => {
      attributes[attribute] = {
        value: ""
      }
    });
    props.setValue(props.value.push({
      tag: tagOptions[0],
      text: "",
      attributes: attributes
    }))
  }

	return (
    <div>
      {textItems.map((item, i) => {
          return(
            <TextItem
              key={`${item}-${i}`}
              value={props.value}
              item={item}
              updateIndex={i}
              props={props.props}
              handleChange={props.handleChange}
              setValue={props.setValue}
              editOptions={props.editOptions}
              setEditOptions={props.setEditOptions}
              editKey={props.editKey}
              setTextItems={setTextItems}
            />
          )
      })}
      <div className="tool-add-text-item">
        <button>
          <img src={Plus} alt="add" onClick={e => addTextItem() }/>
        </button>
      </div>
    </div>
  )
}

export default textItems;