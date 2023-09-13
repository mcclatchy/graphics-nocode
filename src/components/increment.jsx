import { useState, useEffect } from "react";
import "./increment.css"
import Toolbar from "./toolbar.jsx"
import WebComponent from "./webComponent.jsx"
import Plus from '../assets/plus.svg';
import { updateArray } from "../utils/array.js"
import { addLink, addScript } from "../utils/dom.js"
import ReactDOMServer from 'react-dom/server'

const Increment = (props) => {
  const [count, setCount] = useState(0);
  const maxCount = 9;
  return (
    <div className="increment-wrapper">
      <label>
        <input
          type="checkbox"
          checked={count > 0}
          onChange={() => {
            setCount((prev) => {
              return prev < maxCount ? prev + 1 : prev
            });

            // TODO: Where should this type of logic live?
            if (count < maxCount) {
              props.link && props.setLinks(links => updateArray(links, props.link, true) );
              props.script && props.setScripts(scripts => updateArray(scripts, props.script, true) );
              const id = `${props.label}-${count}`

              const webComponent = <WebComponent
                name={props.label}
                id={id}
                options={props.defaultOptions}
              />;

              props.setWebComponents(webComponents => {
                const updatedWebComponents = [...props.webComponents, webComponent];
                const toolbar = <Toolbar
                  id={id}
                  options={props.defaultOptions}

                  script={props.script}
                  link={props.link}

                  count={count}
                  setCount={setCount}

                  editMode={props.editMode}
                  setEditMode={props.setEditMode}

                  editOptions={props.defaultOptions}
                  setEditOptions={props.setEditOptions}

                  toolbars={props.toolbars}
                  setToolbars={props.setToolbars}

                  webComponents={updatedWebComponents}
                  setWebComponents={props.setWebComponents}
                />
                props.setToolbars(toolbars => [...toolbars, toolbar]);
                props.setEditOptions(props.defaultOptions);
                return updatedWebComponents;
              });

              // TODO: Need to tie this in more specifically with the updating DOM?
              const delay = ms => new Promise(res => setTimeout(res, ms));
              delay(500).then(() => {
                const elem = document.getElementById(id)
                elem && elem.scrollIntoView({ behavior: "smooth"});
              });
            }
          }}

        />
        <span className="increment">
        	<img className={(count > 0 ? 'checked' : '')} src={Plus} alt="add"/>
        	<p className={"count " + (count > 0 ? 'checked' : '')}>{count}</p>
        </span>
        <p className={"label " + (count > 0 ? 'checked' : '')}>{props.label}</p>
      </label>
    </div>
  );
};

export default Increment;