import { useState } from "react";
import "./checkbox.css"
import { toggleLink, toggleScript } from "../utils/dom.js"


const Checkbox = (props) => {
  const defaultChecked = props.checked ? props.checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => !prev );
            props.link && toggleLink(props.link, !isChecked);
            props.script && toggleScript(props.script, !isChecked);
            isChecked ? props.setNum(num => num - 1) : props.setNum(num => num + 1);
          }}
        />
        <span className="checkmark"></span>
        <p className={"label " + (isChecked ? 'checked' : '')}>{props.label}</p>
      </label>
    </div>
  );
};

export default Checkbox;