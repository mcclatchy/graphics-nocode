import { useState } from "react";
import "./checkbox.css"
import { toggleLink, toggleScript } from "../utils/dom.js"


const Checkbox = ({ label, checked, link, script }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked((prev) => {
              link && toggleLink(link, !prev);
              script && toggleScript(script, !prev);
              return !prev
            });
          }}
        />
        <span className="checkmark"></span>
        <p className={"label " + (isChecked ? 'checked' : '')}>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;