const binaryArrayToNumber = arr => {
    let final = 0;
    let result =  arr.forEach((x, i)=>{
        if (x != 0) {
            if(x[i] == 0)  final += x
                
            else{
                final += 2 * ((arr.length - 1) - x[i])
            }
            console.log(final)
        } 
    }, 0);
  };



  binaryArrayToNumber([0,1,0,0,1])
  binaryArrayToNumber([0,0,0,1])


