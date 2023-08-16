document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.getElementById("login-button");
  const authForm = document.querySelector(".auth-form");
  const authenticatedContent = document.querySelector(".authenticated-content");

  loginButton.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "MRI" && password === "MRI2525") {
      authForm.style.display = "none";
      authenticatedContent.style.display = "block";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});
