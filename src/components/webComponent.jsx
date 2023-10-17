import React, { Component } from "react";
import { sortByField } from "../utils/array.js"

import './webComponent.css'

class WebComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let slot;

    const sortedOptions = {}
    Object.keys(this.props.options).forEach(key => {
      let option = this.props.options[key];
      option.value = option.sort ? sortByField(option.value, option.sort) : option.value;
      sortedOptions[key] = option;
    })

    const attributes = sortedOptions && Object.keys(sortedOptions) ? 
      Object.keys(sortedOptions).filter(key => !key.startsWith("--")).map((key, i) => {
        const value = sortedOptions[key].value;
        if (value !== null) {
          if (key === "slot") {
            const getFormattedAttributes = (attributes) => attributes ? Object.keys(attributes).map(key => {
              return `${key}="${attributes[key].value}"`
            }).join(" ") : ""

            const formattedValue = value.map(val => `<${val.tag} ${getFormattedAttributes(val.attributes)}>${val.text}</${val.tag}>`);
            slot = formattedValue.join("\n");
            return "";
          } else {
            return `${key}="${value}"`;
          }
        }
      }).join(" ") : ""

    const style = sortedOptions && Object.keys(sortedOptions) ? 
      Object.keys(sortedOptions).filter(key => key.startsWith("--")).map((key, i) => {
        const value = sortedOptions[key].value;
        if (value !== null) {
          return `${key}: ${value}`
        }
      }).join("; ") : ""

    const html = `<${this.props.name} ${style ? `style="${style}"` : ""} id="${this.props.id}" ${attributes ? attributes : ""}>${slot ? slot : ""}</${this.props.name}>`

    return (
      <div className="embed-infographic" dangerouslySetInnerHTML={{__html: html}}></div>
    );
  }
}

export default WebComponent;
