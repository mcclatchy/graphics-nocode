import { useState } from "react";
import TextItem from './textItem.jsx'
import Plus from '../assets/plus.svg';
import './textItems.css'

const textItems = (props) => {
  const [textItems, setTextItems] = useState(props.value);

  const addTextItem = () => {
    const tagOptions = props.editOptions[props.editKey].options;
    props.setValue(props.value.push({
      tag: tagOptions[0],
      text: ""
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