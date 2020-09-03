var r=require('readline-sync')
num1=r.question('enter 2 numbers ')
num2=r.question('  ')
console.log(num1, num2)
if (num1>num2){
    console.log('larger num is : '+ num1)
}
else{
    console.log('larger num is : '+ num2)
}