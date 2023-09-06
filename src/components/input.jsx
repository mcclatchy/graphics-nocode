import React, { Component, useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import Switch from './switch.jsx'
import TextItems from './textItems.jsx'
import './input.css'

const calculateRangePercentage = (value, min, max) => {
  return 100 * (value - min) / (max - min);
}

const Input = (props) => {

	const handleChange = (e, props) => {
    e.preventDefault();
    newValue = e.target.value || e.target.getAttribute('value');
		setValue(newValue);
  	props.setEditOptions(editOptions => {
  		editOptions[props.editKey]["value"] = newValue
  		return editOptions;
  	});
  };

  const renderType = (type) => {
    switch(type) {
      case 'text':
        return (
          <TextareaAutosize
            type={type}
            value={newValue || defaultValue}
            className="tool-modal-value"
            onChange={(e) => { handleChange(e, props); }}
            spellCheck="false"
          ></TextareaAutosize>
        );
      case 'range':
        return (
          <div className="flex-row">
            <div className="unit-range">{min}{unit}</div>
            <div className="tool-edit-input-output" type={type}>
              <input
                type={type}
                min={min}
                max={max}
                value={newValue || defaultValue}
                className="tool-modal-value"
                onChange={(e) => { 
                  handleChange(e, props);
                  setSliderPercentage(calculateRangePercentage(parseInt(newValue || defaultValue), parseInt(min), parseInt(max)));
                }}
              />
              <div className={type === 'range' ? 'range-output' : ''}>
                <output style={{left: `${sliderPercentage}%`}}>{newValue || defaultValue}{unit}</output>
              </div>
            </div>
            <div className="unit-range">{max}{unit}</div>
          </div>
        );
      case 'switch':
        return (
          <Switch
            defaultValue={newValue || defaultValue}
            value={newValue || defaultValue}
            handleChange={handleChange}
            props={props}
            options={options}
          />
        )
      case 'text-item':
        return (
          <TextItems
            value={newValue || defaultValue}
            props={props}
            handleChange={handleChange}
            setValue={setValue}
            setEditOptions={props.setEditOptions}
            editKey={props.editKey}
          />
        )
      default:
        return(
          <div className="tool-edit-input-output" type={type}>
            <input
              type={type}
              min={min}
              max={max}
              value={newValue || defaultValue}
              className="tool-modal-value"
              onChange={(e) => { 
                handleChange(e, props);
              }}
            />
            <output>{newValue || defaultValue}{unit}</output>
          </div>
        )
    }
  }

	const item = props.editOptions[props.editKey];
	const label = item.label;
  const defaultValue = item.value;
  const type = item.type;
  const unit = item?.unit;
  const min = item?.min;
  const max = item?.max;
  const options = item?.options;

  let newValue = null;
	const [value, setValue] = useState(defaultValue);
  const [sliderPercentage, setSliderPercentage] = useState(type === 'range' ? calculateRangePercentage(parseInt(defaultValue), parseInt(min), parseInt(max)) : null)

	return (
    <div className="tool-modal-wrapper">
      <div className="tool-modal-label">{label}</div>
      <div className="tool-edit-item" type={type}>
        {renderType(type)}
      </div>
    </div>
  )
}

export default Input;