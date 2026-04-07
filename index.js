const inputText = document.getElementById('destInput');
const card1 = document.getElementById('overallcon');
let adultIcr = document.getElementById("people1")
let adultIcre = document.getElementById("peoplepe")
let childDecre = document.getElementById("people2")
let childDecr = document.getElementById("peoplepo")
let rooM = document.getElementById("peoplee")
let roomDecre = document.getElementById("people3")

let count = 0
inputText.addEventListener('click', () => {
  card1.classList.remove('card-hidden');

  window.addEventListener('click', (e) => {
    if (e.target !== inputText && ! card1.contains(e.target))
    {card1.classList.add('card-hidden');

    }
  })
});
function adulticr(){
  if( count < 30) {
  count += 1
  adultIcr.textContent = count + " " + 'Adults' +" ."
  adultIcre.textContent = count }
}
function adultdecr(){
  if ( count > 0){
  count -= 1
   adultIcr.textContent = count + " " + 'Adults' +" ."
  adultIcre.textContent = count } 
}
function childdecr(){
  if (count > 0){
    count -= 1
    childDecre.textContent = count + " " + 'Children' + " ."
    childDecr = count

  }
}
function childicr(){
  if (count < 30){
    count += 1
    childDecre.textContent = count + " " + 'Children' + " ."
    childDecr = count

  }
}
function roomdecr(){
  if (count > 0){
    count -= 1
    roomDecre.textContent = count + " " + 'Rooms'
    rooM.textContent = count
  }
}
function roomdicr(){
  if (count < 30){
    count += 1
    roomDecre.textContent = count + " " + 'Rooms'
    rooM.textContent = count
  }
}






  let isOpen = true;

  function toggleSupport() {
    if (isOpen) {
      document.getElementById("demo").innerHTML = "";
      document.getElementById("arrow").innerHTML = "&#8964;"; // ∨
      isOpen = false;
    } else {
      document.getElementById("demo").innerHTML = `
        <p>Manage your trips</p>
        <p>Contact Customer Service</p>
        <p>Safety resource centre</p>
      `;
      document.getElementById("arrow").innerHTML = "&#8963;"; // ∧
      isOpen = true;
    }
  }