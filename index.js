
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