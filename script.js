const btn = document.querySelector(".btn");
const text = document.querySelector(".text");
const modalBody = document.querySelector(".modal-body");
const frame = document.querySelector(".video");

const ValidURL = (str) => {
//   Updated regular expression for URL validation
  let url =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  if (!url.test(str)) {
    alert("Please enter a valid URL.");
    return false;
  } else {
    return true;
  }
};

const inputVideo = () => {
  if (text.value === "") {
    modalBody.innerText = "Please enter a URL.";
    modalBody.style.backgroundColor = "red";
    modalBody.style.color = "white";
  } else if (ValidURL(text.value)) {
  } else {
    modalBody.innerText = "error:Enter valide link";
    modalBody.style.backgroundColor = "red";
    modalBody.style.color = "white";
  }
};

btn.addEventListener("click", () => {
  inputVideo();
});
