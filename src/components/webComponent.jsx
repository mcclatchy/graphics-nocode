import './webComponent.css'

const WebComponent = ({ name, id, options = {} }) => {
  let slot;

  const attributes = Object.keys(options) ? 
    Object.keys(options).map(function(key, i) {
      const value = options[key].value;
      if (key === "slot") {
        slot = value.join("\n");
        return "";
      } else {
        return `${key}="${value}"`;
      }
    }).join(" ") : ""

  const html = `<${name} id="${id}" ${attributes ? attributes : ""}>${slot ? slot : ""}</${name}>`
  return (
  	<div className="embed-infographic">
  		<div dangerouslySetInnerHTML={{__html: html}}></div>
  	</div>
  );
};

export default WebComponent;