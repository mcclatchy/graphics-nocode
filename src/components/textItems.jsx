import { useState } from "react";
import TextItem from './textItem.jsx'
import Plus from '../assets/plus.svg';
import './textItems.css'

const textItems = (props) => {
  const [textItems, setTextItems] = useState(props.value);

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
              setEditOptions={props.setEditOptions}
              editKey={props.editKey}
              setTextItems={setTextItems}
            />
          )
      })}
      <div className="tool-add-text-item">
        <button>
          <img src={Plus} alt="add" onClick={(e) => props.setValue(props.value.push("")) }/>
        </button>
      </div>
    </div>
  )
}

export default textItems;