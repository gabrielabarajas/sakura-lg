const RandomArray = (array) =>{
    for (let i = array.length-1; i>0; i--){
        let x = Math.floor(Math.random() * (i+1));
        let temporal = array[i];
        array[i] = array[x];
        array[x] = temporal;
    }
}

export default RandomArray