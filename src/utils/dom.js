const SCRIPT_PREFIX = "tool-script"
const LINK_PREFIX = "tool-link"

export const addScript = (url) => {
  const id = `${SCRIPT_PREFIX}-${getFilenameFromUrl(url)}`;

  if (!document.getElementById(id)) {
	  const script = document.createElement("script");

	  script.src = url;
	  script.type = "module";
	  script.id = id
	  document.body.appendChild(script);
  }
}

export const addLink = (url) => {
	const id = `${LINK_PREFIX}-${getFilenameFromUrl(url)}`;

	if (!document.getElementById(id)) {
	  const link = document.createElement("link");

	  link.rel = 'stylesheet';
	  link.href = url;
	  link.id = id;
	  document.head.appendChild(link);
	}
}

export const removeElementById = (id) => {
  document.getElementById(id).remove();
}

export const removeAllElementsByIdPrefix = (prefix) => {
  getAllElementsByIdPrefix(prefix).forEach((elem) => elem.remove());
}

export const removeToolLinks = () => {
  removeAllElementsByIdPrefix(LINK_PREFIX);
}

export const removeToolScripts = () => {
  removeAllElementsByIdPrefix(SCRIPT_PREFIX);
}

export const getAllElementsByIdPrefix = (prefix) => {
  return document.querySelectorAll(`[id^="${prefix}"]`)
}

export const getToolLinks = () => {
  return getAllElementsByIdPrefix(LINK_PREFIX)
}

export const getToolScripts = () => {
  return getAllElementsByIdPrefix(SCRIPT_PREFIX)
}

export const toggleScript = (url, add) => {
  const id = `${SCRIPT_PREFIX}-${getFilenameFromUrl(url)}`;
  if (add) {
    addScript(url);
  } else {
    removeElementById(id);
  }
}

export const toggleLink = (url, add) => {
  const id = `${LINK_PREFIX}-${getFilenameFromUrl(url)}`;
  if (add) {
    addLink(url, id);
  } else {
    removeElementById(id);
  }
}

export const getFilenameFromUrl = (url) => {
  return url.replace(/^.*[\\\/]/, '').split(".")[0]
}