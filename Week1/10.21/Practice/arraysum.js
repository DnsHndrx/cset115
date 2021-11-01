var arr = [1,2,3],

function add(arr){
    var sum=0;
    for (var x=0; x<arr.length; x++){
        if(arr.isArray(arr[x])){
            sum+=add(arr[x]);
        }
        else{
            sum+=arr[x];
        }
        
    }
    return sum;
}