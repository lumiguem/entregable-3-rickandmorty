//Función que me retorna un número aleatorio entre el 1 y 126
export const getRandomDimension = () =>{
    //0 => 0.99999999
    return  Math.floor(Math.random() * 126) + 1
   
  }