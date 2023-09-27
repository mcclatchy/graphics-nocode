export function formatHTML(html) {
	if (!html) {
		return html;
	}
  var tab = '\t';
  var result = '';
  var indent= '';

  html.split(/>\s*</).forEach((element) => {
      if (element.match( /^\/\w/ )) {
          indent = indent.substring(tab.length);
      }

      result += indent + '<' + element + '>\r';

      if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
          indent += tab;              
      }
  });

  return result.substring(1, result.length-2).replace(/^/gm, '\t');
}

export function formatAttributes(input) {
	if (!input) {
		return input;
	}

  // Use a regular expression to match spaces between attributes and replace them with newlines and indentation
  const formattedInput = input.replace(/ ([^\s>]+=)/g, '\n  $1');

  // Move the closing tag and caret to their own lines
  const finalFormattedInput = formattedInput.replace(/">/g, '"\n>').replace(/<\//g, '\n</');

  // Add an extra newline after the closing tag
  return finalFormattedInput;
}

export function beautifyHTML(html) {
	if (!html) {
		return html;
	}
	const flatHTML = html.replaceAll("\n", " ");
	const regex = /<([a-zA-Z0-9-]+)(?:[^>]+)?>(.*?)<\/\1>/;
	const match = flatHTML.match(regex);

	if (match) {
	  const openingTag = `<${match[0].match(/<[^>]+>/)[0].slice(1, -1)}>`;
	  const extractedContent = match[2];
	  const closingTag = `</${match[1]}>`;

	  const formattedOpeningTag = formatAttributes(openingTag);
		const formattedContent = extractedContent ? `${formatHTML(extractedContent)}` : null;
		return [formattedOpeningTag, formattedContent, closingTag].filter(i => i).join("\n");
	}
}

export function cleanHTML(html) {
	if (!html) return html;
	html = makePathRelative(html);
	html = removeVersion(html);
	html = removeId(html);
	html = removeBlankLines(html);
	return html;
}

export function removeEmbedInfographic(html) {
	return html.replace(/^<div[^>]*>|<\/div>$/g, '');
}

export function makePathRelative(html) {
	if (!html) return html;
	return html.replaceAll(/"(http|www)(.*?)\/static/g, '"/static')
}

export function removeVersion(html) {
	return html.replaceAll(/\?v(.*?)"/g, '"')
}

export function removeId(html) {
	return html.replace(/id=\"(.*?)\"/g, "").replace(" >", ">")
}

export function removeBlankLines(html) {
	return html.replace(/^\s*[\r\n]/gm, "");
}