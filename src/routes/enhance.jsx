import { Link } from 'react-router-dom'
import { useState } from 'react'
import { addLink, addScript, removeToolLinks, removeToolScripts } from '../utils/dom.js'
import Menu from '../components/menu.jsx'
import Article from '../components/article.jsx'
import './root.css'

const Enhance = () => {
  // TODO: there's probably an easier way of managing state either through better architecture or global context
  const [copyMode, setCopyMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editOptions, setEditOptions] = useState({});
  const [toolbars, setToolbars] = useState([]);
  const [webComponents, setWebComponents] = useState([]);
  const [links, setLinks] = useState([]);
  const [scripts, setScripts] = useState([]);


  {/* TODO: maybe a cleaner way of running this? It re-applies each script each time the scripts array changes
      WHY? Having trouble running a JS file multiple times sample article refresh
  */}
  removeToolLinks();
  removeToolScripts();
  return (
    <>
      {scripts.map(script => {
        addScript(script);
      })}
      {links.map(link => {
        addLink(link);
      })}
      <div>
        <Menu 
          copyMode={copyMode}
          setCopyMode={setCopyMode}

          editMode={editMode}
          setEditMode={setEditMode}
          
          editOptions={editOptions}
          setEditOptions={setEditOptions}

          toolbars={toolbars}
          setToolbars={setToolbars}

          webComponents={webComponents}
          setWebComponents={setWebComponents}

          links={links}
          setLinks={setLinks}

          scripts={scripts}
          setScripts={setScripts}
        />	
        <Article
          copyMode={copyMode}
          setCopyMode={setCopyMode}

          editMode={editMode}
          setEditMode={setEditMode}

          editOptions={editOptions}
          setEditOptions={setEditOptions}

          toolbars={toolbars}
          webComponents={webComponents}
          
          links={links}
          scripts={scripts}
        />
	    </div>
    </>
  )
}

export default Enhance
