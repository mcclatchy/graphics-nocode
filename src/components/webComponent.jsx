import React, { Component } from "react";

import './webComponent.css'

class WebComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let slot;

    const attributes = this.props.options && Object.keys(this.props.options) ? 
      Object.keys(this.props.options).filter(key => !key.startsWith("--")).map((key, i) => {
        const value = this.props.options[key].value;
        if (value !== null) {
          if (key === "slot") {
            const formattedValue = value.map(val => `<${val.tag}>${val.text}</${val.tag}>`);
            slot = formattedValue.join("\n");
            return "";
          } else {
            return `${key}="${value}"`;
          }
        }
      }).join(" ") : ""

    const style = this.props.options && Object.keys(this.props.options) ? 
      Object.keys(this.props.options).filter(key => key.startsWith("--")).map((key, i) => {
        const value = this.props.options[key].value;
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
