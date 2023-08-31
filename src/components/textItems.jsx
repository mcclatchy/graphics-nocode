import TextareaAutosize from 'react-textarea-autosize';
import './textItems.css'

const textItems = (props) => {

  const updateValue = (e, index) => {
    props.value[index] = e.target.value;
  }

	return (
    <div>
      {props.value.map((item,index) => {
          return(
            <TextareaAutosize
              defaultValue={item}
              className="tool-modal-value"
              onChange={(e) => { updateValue(e, index); }}
              spellCheck="false"
            ></TextareaAutosize>
          )
      })}
    </div>
  )
}

export default textItems;