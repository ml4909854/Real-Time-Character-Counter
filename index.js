const textarea = document.getElementById("textarea");
const totalCharacter = document.getElementById("total-counter")
const ramainCharacter = document.getElementById("remaining-counter")


textarea.addEventListener("keyup", updateCounter);


function updateCounter(){
    totalCharacter.innerText = textarea.value.length
   ramainCharacter.innerText =  textarea.getAttribute("maxLength")-textarea.value.length
}