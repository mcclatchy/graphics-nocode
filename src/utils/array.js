export const updateArray = (arr, elem, add) => {
  const matchIndex = arr.findIndex(x => x == elem)
  if (add) {
    if (matchIndex >= 0) {
      return arr;
    } else {
      arr = [...arr, elem];
      return arr;
    }
  } else {
    if (matchIndex === -1) {
      return arr;
    } else {
      arr = arr.filter((item, i) => i !== matchIndex );
      return arr;
    }
  }
}

const identity = a => a;

// TODO: this is not a generic sort function... very particular to the internal structure of items
// May be able to extend it to specifying nested fields which is what this is
export const sortByField = (array, field, textTransform=identity) => {
  if (!field || !array) return array;
  return array.sort((a,b) => {
    // TODO: this is an attempt to keep newly added text items at the end of the UI
    if (a.attributes[field].value === "") return 1
    const aTransformed = textTransform(a.attributes[field].value);
    const bTransformed = textTransform(b.attributes[field].value);
    return aTransformed.localeCompare(bTransformed)
  });
}
