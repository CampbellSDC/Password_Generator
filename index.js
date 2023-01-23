const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById('generate-btn')
let passwordOne = document.getElementById('password-one')
let passwordTwo = document.getElementById('password-two')
let characterCount = document.getElementById('number-count')



generateBtn.addEventListener('click', function(){
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    for (let i = 0; i < Number(characterCount.value); i++){
        // the below code works because of string coersion
    let randomNum = Math.floor(Math.random() * characters.length)
    let randomNumTwo = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[randomNum]
        passwordTwo.textContent += characters[randomNumTwo]
    }
    console.log(characterCount.value)
})



