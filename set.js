const target = 5;
const array1 = [1, 2, 3, 4 ,2, 5];
 console.log ((array1.find(element => element==target )));
for(i=0;i< array1.length;i++){
  for(j=i+2;j< array1.length;j++){
  if(isTarget(target,array1[i],array1[j] )){
    console.log(array1[i],array1[j])
  }
  }
}

function isTarget(target, first,second){
   return first+second == target;
}

