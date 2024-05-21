 const stringArbitrary = "ABEnglishCD";

export const stringLowerCase = stringArbitrary.toLowerCase();



export let word = "English";
export let wordLowerCase = word.toLowerCase();

/* export function compare(){
    if (word == stringLowerCase){
        console.log("Es verdad");
   }
   else{
     console.log("Es mentira");
   }
} */

export function wordincludes(){
    if(stringLowerCase.includes(wordLowerCase)){
        return true;
    
    }else{
        return false;
    }
}
