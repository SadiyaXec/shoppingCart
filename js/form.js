function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("date").value;
    let selectedShop = document.getElementById("shopsList").value;

    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let gender
    if (male == true) {
        gender = document.getElementById("male").value;
    }
    else {
        gender = document.getElementById("female").value;
    }
    debugger;
}