const form = document.querySelector("#form");
const input = document.querySelector("#input");
const msg = document.querySelector("#msg");
const posts = document.querySelector("#posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("it works");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    console.log("failure");
    msg.innerHTML = "Post cannot be clank";
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
  posts.innerHTML += `<div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
        </div>`;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
