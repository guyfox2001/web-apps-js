
let sign_in_button = document.getElementById('sign_in');
console.log(sign_in_button);
console.log(sign_in_button.classList)

let rotate = (inverse, elem) => {
    if(inverse) elem.classList.add("animation: rotate 1s ease 0s 1 reverse forwards;");
    elem.classList.add("animation: rotate 1s ease 0s 1 normal forwards;");
    // if(inverse) elem.
    // elem.classList.add("rot_rev");
}

sign_in_button.addEventListener("mouseover", rotate, false, sign_in_button);
sign_in_button.addEventListener("mouseout", rotate, true, sign_in_button);



