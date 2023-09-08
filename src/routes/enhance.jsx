import { Link } from 'react-router-dom'
import { useState } from 'react'
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
  const [numThemes, setNumThemes] = useState(0)
  const [numEnhancements, setNumEnhancements] = useState(0)

  return (
    <>
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

          numThemes={numThemes}
          setNumThemes={setNumThemes}

          numEnhancements={numEnhancements}
          setNumEnhancements={setNumEnhancements}
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
          
          numThemes={numThemes}
          setNumThemes={setNumThemes}

          numEnhancements={numEnhancements}
          setNumEnhancements={setNumEnhancements}
        />
	    </div>
    </>
  )
}

export default Enhance
