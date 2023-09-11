export const updateArray = (arr, elem, add) => {
  const matchIndex = arr.findIndex(x => x == elem)

  if (add) {
    if (matchIndex === null) {
      return arr;
    } else {
      arr = [...arr, elem];
      return arr;
    }
  } else {
    if (matchIndex === null) {
      return arr;
    } else {
      arr = arr.filter((item, i) => i !== matchIndex );
      return arr;
    }
  }
}
