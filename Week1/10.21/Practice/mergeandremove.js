var merge1=[1,2,3];
var merge2=[2,30,1,89];
var mergeResult = [].concat(merge1, merge2);
var Duplicates = mergeResult => mergeResult.filter((item, index) => mergeResult.indexOf(item) !== index)
var duplicateEle = Duplicates(mergeResult);
console.log(duplicateEle);