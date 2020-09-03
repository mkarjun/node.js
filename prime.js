
    var n=require('readline-sync')
    n=n.question('enter number ')     
    var n, i, flag = true; 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
    if (flag == true) {
        console.log('true')
    }
    else{
        console.log('false')
    }

