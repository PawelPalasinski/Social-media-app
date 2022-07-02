const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("it works");
    formValidation();
})

let formValidation = () => {
    if (input.value === "") {
        console.log("failure");
        msg.innerHTML = "Post cannot be clank";
     }
    else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
     }
};

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
};