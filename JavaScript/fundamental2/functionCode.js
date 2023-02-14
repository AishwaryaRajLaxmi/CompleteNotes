//Function calling another function

const cutPieces=function(fruit){
    return fruit*4;
}


const fruitProcessor=function(apples,oranges){

    const applePieces=cutPieces(apples);
    const orangePieces=cutPieces(oranges);

    const juice=`juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
    // console.log(juice)
};

console.log(fruitProcessor(2,3));