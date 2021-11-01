var arry = [1, 2, 1, 3, 4, 3, 5];

var Duplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
var duplicateEle = Duplicates(arry);
console.log(duplicateEle);