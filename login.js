document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Call the Google Apps Script function to check the login credentials
    google.script.run.withSuccessHandler(handleLoginResult).checkLogin(username, password);
  });
});

function handleLoginResult(isValidLogin) {
  if (isValidLogin) {
    window.location.href = "https://script.google.com/macros/s/AKfycbxkQj-V4FiyUnxOg40LpH8CvExchda6lMtu_isPZAfm1YAczAExjS90tNh1sYijaTNUfw/exec"; // Redirect to your protected page
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
