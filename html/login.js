const login = require("../routes/login");
function loginU()
{
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login.loginUser([email,password]);
}
