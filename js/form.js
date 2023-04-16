const loginUsername = document.querySelector('.username');
const loginPassword = document.querySelector('.password');

loginUsername.addEventListener(
    "dblclick",
    ()=>{
        loginUsername.value = "User"
        loginPassword.value = "password"
    },
    false
)

document.querySelector('.login-button').addEventListener(
    "mouseover",
    ()=>{
        if(loginUsername.value == "User" && loginPassword.value == "password"){
            document.querySelector('.tohome').setAttribute('href', 'pages/home.html');
        }
    },
    false
)