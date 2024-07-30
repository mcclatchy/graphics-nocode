import { useState } from 'react';
import './switch.css';

const Switch = (props) => {
	const [value, setValue] = useState(props.defaultValue);

	const handleClick = (e, value) => {
		setValue(value);
	}

	return (
   <div className="tool-switch">
    {props.options.map((option, i) => {
      return (
        <div
          key={i}
        	className={"item " + (option.value === value ? "active" : "")}
        	value={option.value}
        	onClick={(e) => {
        		handleClick(e, option.value)
        		props.handleChange(e, props.props)
        	}}
          dangerouslySetInnerHTML={{__html: option.label}}
        >
        </div>
      )
    })}
   </div>
  )
}

export default Switch;