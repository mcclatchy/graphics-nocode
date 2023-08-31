import { useState } from "react";
import "./formats.css"

const Formats = ({ label, checked }) => {
	const classQueryToToggle = ".formats button"


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


	const articleClassName = "tool-article"
	const setArticleSize = (className) => {
		var screen = document.querySelector(`.${articleClassName}`);
		screen.className = `${articleClassName} ${className}`;
	}

  return (
		<div className="formats">
			<button className="desktop active" onClick={(e) => { toggleActive(e); setArticleSize("desktop");}} ></button>
			<button className="tablet" onClick={(e) => { toggleActive(e); setArticleSize("tablet");}} ></button>
			<button className="mobile" onClick={(e) => { toggleActive(e); setArticleSize("mobile");}} ></button>
		</div>
  );
};

export default Formats;