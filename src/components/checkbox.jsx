import { useState } from "react";
import "./checkbox.css"
import { updateArray } from "../utils/array.js"
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
            props.link && props.setLinks(links => updateArray(links, props.link, !isChecked) );
            props.script && props.setScripts(scripts => updateArray(scripts, props.script, !isChecked) );
          }}
        />
        <span className="checkmark"></span>
        <p className={"label " + (isChecked ? 'checked' : '')}>{props.label}</p>
      </label>
    </div>
  );
};

export default Checkbox;