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