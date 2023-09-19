export const updateArray = (arr, elem, add) => {
  const matchIndex = arr.findIndex(x => x == elem)
  console.log(elem, arr, matchIndex)
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
