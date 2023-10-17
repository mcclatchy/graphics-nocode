import React, {Component} from "react";
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SampleArticle from "./sampleArticle.jsx"
import CopyModal from "./copyModal.jsx"
import EditModal from "./editModal.jsx"
import { sortByField } from "../utils/array.js"
import './article.css'


class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sortedEditOptions = {}
    Object.keys(this.props.editOptions).forEach(key => {
      let option = this.props.editOptions[key];
      option.value = option.sort ? sortByField(option.value, option.sort) : option.value;
      sortedEditOptions[key] = option;
    })

    return (
      <>
      	<div className="tool-article-wrapper">
          <div className="tool-overlay" style={{display: this.props.editMode || this.props.copyMode ? 'block' : 'none' }}></div>
          <CopyModal
            copyMode={this.props.copyMode}
            setCopyMode={this.props.setCopyMode}
            webComponents={this.props.webComponents}
          />
          <EditModal
            editOptions={sortedEditOptions}
            setEditOptions={this.props.setEditOptions}

            editMode={this.props.editMode}
            setEditMode={this.props.setEditMode}
          />
      		<div className="tool-spacer"></div>
        	<div className="tool-article">
        		<SampleArticle
              freeze={this.props.editMode || this.props.copyMode}
              toolbars={this.props.toolbars}
              webComponents={this.props.webComponents}
              links={this.props.links}
              scripts={this.props.scripts}
            />
        	</div>
        </div>
      </>
    )
  }
}

export default Article;
