var arr1=[1,0,2,3,4]
var arr2=[3,5,6,7,8,13]
var x=[]

arr1.forEach((i, idx) =>
{
    x.push(arr1[idx]+arr2[idx])
    return x
});

console.log(x)