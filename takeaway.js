function canWin(num){
    if (num < 2){
     return false
    } 
    
    let possMoves = [2, 3, 5]
    for(let i = 0; i < 3; i++){
      
      let newNum = num - possMoves[i]
  
      if(canWin(newNum) == false) {
        return true
        }
  
  }
    return false
  }
  
  console.log(canWin(1))
  console.log(canWin(2))
  console.log(canWin(3))
  console.log(canWin(4))
  console.log(canWin(5))
  console.log(canWin(6))
  console.log(canWin(7))
  console.log(canWin(8))
  console.log(canWin(9))
  console.log(canWin(10))