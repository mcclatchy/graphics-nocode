export const addScript = (url) => {
  const id = `script-${getFilenameFromUrl(url)}`;

  if (!document.getElementById(id)) {
	  const script = document.createElement("script");

	  script.src = url;
	  script.type = "module";
	  script.id = id
	  document.body.appendChild(script);
  }
}

export const addLink = (url) => {
	const id = `link-${getFilenameFromUrl(url)}`;

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

export const toggleScript = (url, add) => {
  const id = `script-${getFilenameFromUrl(url)}`;
  if (add) {
    addScript(url);
  } else {
    removeElementById(id);
  }
}

export const toggleLink = (url, add) => {
  const id = `link-${getFilenameFromUrl(url)}`;
  if (add) {
    addLink(url, id);
  } else {
    removeElementById(id);
  }
}

export const getFilenameFromUrl = (url) => {
  return url.replace(/^.*[\\\/]/, '').split(".")[0]
}