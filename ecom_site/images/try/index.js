

function isEven(n){
    let count=0;
    for(let i=0;i<n;i++){
        count ++;
        if(isEvenNumber(i)) {
            console.log(i + " is even number")
        }
        console.log(count);

    }
    
    function isEvenNumber(n){

    if(n%2===0){
        return true;
    
}
  }
}
    isEven(100);


