export function removeVersion(str) {
	return str.replaceAll(/\?v(.*)/g, '')
}