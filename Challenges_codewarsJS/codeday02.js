/**
 * Description:

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
 *
 */
// return masked string
function maskify(cc) {
    var result = [...cc];
    let willChangeValues = cc.length > 1 && cc.length % 2 ==0 
    ? true 
    :  false;
     if(willChangeValues ){
       let valuesChange = (cc.length + 1) - 5;
       for(let i = 0; i < valuesChange; i++){
         result[i] = '#';
       }
       return result.join('');
     } else if (cc.length > 1){
       let valuesChange = (cc.length + 1) - 5;
       for(let i = 0; i < valuesChange; i++){
         result[i] = '#';
       }
       return result.join('');
     } else {
         return cc
     }
   
  }