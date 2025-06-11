'use strict';

document.getElementById("sign-in").onclick = async function () {
    console.log("Clicked on Sign In.");

    const formData = new FormData(document.forms.signin)

    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username);
    console.log(password);
}