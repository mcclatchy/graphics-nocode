import TextareaAutosize from 'react-textarea-autosize';
import './textItems.css'

const textItems = (props) => {

  const updateValue = (e, index) => {
    props.value[index] = e.target.value;
  }

	return (
    <div>
      {props.value.map((item, i) => {
          return(
            <TextareaAutosize
              key={i}
              defaultValue={item}
              className="tool-modal-value"
              onChange={(e) => { updateValue(e, i); }}
              spellCheck="false"
            ></TextareaAutosize>
          )
      })}
    </div>
  )
}

export default textItems;