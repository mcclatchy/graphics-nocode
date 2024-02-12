import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { removeVersion } from '../utils/string.js'
import { getUserMode } from '../utils/url.js'
import { addLink, addScript, removeToolLinks, removeToolScripts } from '../utils/dom.js'
import { USER_MODE_DEV, MENU_CONFIG_DEV, MENU_CONFIG_DEFAULT } from "../utils/globals.js"
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
  const [userMode, setUserMode] = useState(getUserMode(window.location.href));

  useEffect(() => {
    const handleUrlChange = () => {
      setUserMode(getUserMode(window.location.href));
    };
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

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
          config={userMode === USER_MODE_DEV ? MENU_CONFIG_DEV : MENU_CONFIG_DEFAULT }

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
