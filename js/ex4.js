
export let cadenaString = "Factoria F5";


export function invertirString(cadenaString) {
    

    let word = cadenaString.split(' ');
    
    let stringInvertido = word.reverse();
    
    let resultadoString = stringInvertido.join(' ');
    
    
    return resultadoString;
}




