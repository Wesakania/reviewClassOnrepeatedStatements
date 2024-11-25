//Repeated Statements

//Write a program that launches a carousal for 10 turns, showing the turn number each time.
//Improve it so that the number of turns is given by the user
document.querySelector("#score").addEventListener("click",run)

function run(){

      let userInput = document.querySelector("#temp").value;
      for(let i = 1; i <= userInput; i++){
      if(typeof Number(userInput)==="number"){
       let number = document.querySelector("#thing").innerText = `Turn number ${i}`
       console.log(number)
      }else{
        let invalid = document.querySelector("#thing").innerText = `Enter a valid number`
        console.log(invalid)
      }
      
    }
   
}