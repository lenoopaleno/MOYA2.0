addEventListener('DOMContentLoaded', () => {

        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');

        navToggle.addEventListener("click", () => {
            const visibility = primaryNav.getAttribute('data-visible');

            if (visibility === "false") {
                primaryNav.setAttribute('data-visible', true)
                navToggle.setAttribute('aria-expanded', true)
            } else if (visibility === "true") {
                primaryNav.setAttribute('data-visible', false)
                navToggle.setAttribute('aria-expanded', false)
            }
        })
    })

    document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const messageInput = document.querySelector("#message");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the form data
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const message = messageInput.value;

    // Send the form data to the PHP script
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/php/mail.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert("Wiadomość została wysłana.");
        // Clear the form
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        messageInput.value = "";
      }
    };
    xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&phone=" + encodeURIComponent(phone) + "&message=" + encodeURIComponent(message));
  });
});
