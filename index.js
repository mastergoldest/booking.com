const inputText = document.getElementById('destInput');
const card1 = document.getElementById('overallcon');
inputText.addEventListener('click', () => {
  card1.classList.remove('card-hidden');

  window.addEventListener('click', (e) => {
    if (e.target !== inputText && ! card1.contains(e.target))
    {card1.classList.add('card-hidden');

    }
  })
});







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