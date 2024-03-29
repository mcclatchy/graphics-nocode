import { useState } from "react";
import "./profiles.css"

const Profiles = ({ label, checked }) => {
	const classQueryToToggle = ".profiles button"


	const toggleActive = (e) => {
		if (e) {
			var target = e.target || e.srcElement;
			var buttonList = document.querySelectorAll(classQueryToToggle);
			buttonList.forEach(function(button) {
				if (button === target && !button.classList.contains("active")) {
					return button.classList.add("active");
				}
				if (button !== target) {
					return button.classList.remove("active");
				}
			});
		}	
	}


	const setHtmlProfile = (className) => {
		var html = document.querySelector("html");
		html.className = `${className}`;
	}

  return (
		<div className="profiles">
			<button className="subscriber active" onClick={(e) => { toggleActive(e); setHtmlProfile("msb");}} >Subscriber</button>
			<button className="visitor" onClick={(e) => { toggleActive(e); setHtmlProfile("");}} >Visitor</button>
		</div>
  );
};

export default Profiles;