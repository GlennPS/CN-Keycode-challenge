// const myKeyPress = () => {
//     console.log("Click any key")
//   }
  

let eventBigNum = document.getElementById("bigNum");

let eventKey = document.getElementById("key");
let eventCode = document.getElementById("code");
// New element = frompage.findObjectsUniqueId("object")
let eventWhich = document.getElementById("which");

// frompage.addEventListener("actiontotake", (functionname)) => {instructions}
document.addEventListener("keydown", (activate) => {

// Get my new element.displayonpage = myfunctionname.id;
 eventKey.innerHTML= activate.key;

eventCode.innerHTML = activate.code;

eventWhich.innerHTML = activate.which;

eventBigNum.innerHTML = activate.which;

console.log(eventBigNum);
console.log(eventKey);
console.log(eventCode);
console.log(eventWhich);

})

