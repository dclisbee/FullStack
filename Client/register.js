const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const regButton = document.querySelector("#reg-form-submit")
const logButton = document.querySelector("#login-form-submit")
const submitButton = document.querySelector("#login-form-submit")

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const email = loginForm.email.value;
//     const password = loginForm.password.value;

//     if (email === "" && password === "") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })

const createUser = async() => {
    console.log("create user")
    const url = "http://localhost:3006/register";
    const userEmail = document.querySelector("#email-field").value;
    console.log(userEmail)
    const userPassword = document.querySelector("#password-field").value;
    const userAccount = {
        userEmail,
        userPassword,
    }
console.log({userAccount})
    const createUsers = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userAccount),
    });
}
submitButton.addEventListener("click", () => {
    createUser();
})



// const readItems = async() => {
//     const url = "http://localhost:3006/get_items";
//     const userAccount = await fetch(url, {
//         method: "GET",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const json = await userAccount.json(item.id);
//     console.log(json)
// }


// const updateItems = async() => {
//     const url = "http://localhost:3006/update_item";
//     const updateItem = await fetch(url, {
//         method: "PUT",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const json = await userAccount.json(updateItem);
//     console.log(json)
// }

// const delItems = async() => {
//     const url = "http://localhost:3006/del_item";
//     const deleteItem = await fetch(url, {
//         method: "DELETE",
//         mode: "cors",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     const json = await userAccount.json(deleteItem);
//     console.log(json)
// }