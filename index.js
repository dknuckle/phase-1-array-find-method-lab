// code your solution here
function superbowlWin(array) {
    const win = array.find(object => object.result === "W");
    return win ? win.year : undefined;
  }