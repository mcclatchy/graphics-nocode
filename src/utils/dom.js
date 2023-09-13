export const SCRIPT_PREFIX = "tool-script"
export const LINK_PREFIX = "tool-link"

export const addScript = (url, prefix=SCRIPT_PREFIX) => {
  const id = `${prefix}-${getFilenameFromUrl(url)}`;

  if (!document.getElementById(id)) {
    const script = document.createElement("script");

    script.src = `${url}?v=${Date.now()}`;
    script.type = "module";
    script.id = id
    document.body.appendChild(script);
  }
}

export const addLink = (url, prefix=LINK_PREFIX) => {
	const id = `${prefix}-${getFilenameFromUrl(url)}`;

  if (!document.getElementById(id)) {
    const link = document.createElement("link");

    link.rel = 'stylesheet';
    link.href = url;
    link.id = id;
    document.head.appendChild(link);
  }
}

export const removeElementById = (id) => {
  const elem = document.getElementById(id)
  elem && elem.remove();
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
  const links = Array.from(getAllElementsByIdPrefix(LINK_PREFIX));
  return links;
}

export const getToolScripts = () => {
  const scripts = Array.from(getAllElementsByIdPrefix(SCRIPT_PREFIX));
  return scripts;
}

export const toggleScript = (url, prefix=SCRIPT_PREFIX) => {
  const id = `${prefix}-${getFilenameFromUrl(url)}`;
  if (!document.getElementById(id)) {
    addScript(url);
  } else {
    removeElementById(id);
  }
}

export const toggleLink = (url, prefix=LINK_PREFIX) => {
  const id = `${prefix}-${getFilenameFromUrl(url)}`;
  if (!document.getElementById(id)) {
    addLink(url, id);
  } else {
    removeElementById(id);
  }
}

export const getFilenameFromUrl = (url) => {
  return url.replace(/^.*[\\\/]/, '').split(".")[0]
}