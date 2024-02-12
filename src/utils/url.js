export function getUserMode(url) {
	return getAllUrlParams(url)?.mode || "";
}

function getAllUrlParams(url) {
  var queryString = url.split('?')[1];
  var params = {}, queries, temp, i, l;

  if (queryString) {
	  queries = queryString.split("&");

	  // Convert the array of strings into an object
	  for (i = 0, l = queries.length; i < l; i++) {
	    temp = queries[i].split('=');
	    params[temp[0]] = temp[1];
	  }
	}
  return params;
}