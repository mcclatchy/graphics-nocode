export function getExternalStyleFromOptions(options) {
	const externalStyles = {}
	const styleKeys = options && Object.keys(options) ? Object.keys(options).filter(key => key.startsWith("--")) : [];

  styleKeys.forEach(key => {
    const option = options[key];
    const property = option?.property;
    
    if (!option?.property) { 
      return;
    };

    if (!Object.keys(externalStyles).includes(property)) {
      externalStyles[property] = []
    }

    const value = option?.unit ? `${option.value}${option?.unit}` : option.value;
    if (value !== null) {
      externalStyles[property].push(`${key}: ${value}`)
    }
  })

  const externalStyle = Object.keys(externalStyles).map(key => {
    return `${key} { ${externalStyles[key].join("; ")} }`
  })

  return externalStyle.length ? `<style>${externalStyle.join(" ")}</style>` : "";
}

export function getInternalStyleFromOptions(options) {
	const styleKeys = options && Object.keys(options) ? Object.keys(options).filter(key => key.startsWith("--")) : [];

  const internalStyle = styleKeys ? styleKeys.filter(key => !options[key]?.property).map(key => {
    const option = options[key];
    const value = option?.unit ? `${option.value}${option?.unit}` : option.value;
    if (value !== null) {
      return `${key}: ${value}`
    }
  }).join("; ") : ""

  return internalStyle ? `style="${internalStyle}"` : "";
}