let input1 = document.getElementById("inputkey");
let input2 = document.getElementById("inputvalue");
input1.focus();
let allspan = document.querySelectorAll(".buttons span");
let result = document.querySelector(".results > span");

allspan.forEach(span => {
    span.addEventListener("click", (e) => {
        if (e.target.classList.contains("check")) {
            check_item();
        }
        else if (e.target.classList.contains("add")) {
            add_item();
        }
        else if (e.target.classList.contains("delete")) {
            delete_item();
        }
        else if (e.target.classList.contains("show")) {
            show_items();
        }
    })
})

function check_item() {
    let ik = input1.value;
    if (ik !== "") {
        if (localStorage.getItem(ik)) {
            result.innerHTML = `Found Local storage item called <span>${ik}</span>`;
        } else {
            result.innerHTML = `No Local storage item with the name <span>${ik}</span>`;
        }
        input1.value = "";
        input1.focus();
    } else {
        result.innerHTML = "input cant be empty";
        input1.value = "";
        input1.focus();
    }
}
function add_item() {
    let ik = input1.value;
    let iv = input2.value;
    if (ik !== "" && iv !== "") {
        localStorage.setItem(ik, iv);
        input2.value = "";
        result.innerHTML = `Local storage item <span>${ik}</span> added`;
        input1.value = "";
        input1.focus();
    } else {
        result.innerHTML = "input cant be empty";
        input1.value = "";
        input1.focus();
    }
}
function delete_item() {
    let ik = input1.value;

    if (ik !== "") {
        if (localStorage.getItem(ik)) {
            localStorage.removeItem(ik);
            result.innerHTML = `Local storage item <span>${ik}</span> deleted`;
        } else {
            result.innerHTML = `No Local storage item with the name <span>${ik}</span>`;
        }
        input1.value = "";
        input1.focus();
    } else {
        result.innerHTML = "input cant be empty";
        input1.value = "";
        input1.focus();
    }
}
function show_items() {
    if (localStorage.length) {
        result.innerHTML = "";
        for (let [k, v] of Object.entries(localStorage)) {
            result.innerHTML += `<span>${k} => ${v}</span><br>`;
        }
        input1.value = "";
        input1.focus();
    } else {
        result.innerHTML = `Local storage is empty`;
        input1.value = "";
        input1.focus();
    }
}