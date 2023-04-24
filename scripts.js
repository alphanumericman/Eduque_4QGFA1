function refreshpage() {
    location.reload()
}

function submitForm() {
    let firstName = document.getElementById('firstname').value;
    let lastName = document.getElementById('lastname').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let email = document.getElementById('gmail').value;
    let contactNumber = document.getElementById('number').value;

    document.body.innerHTML = '';
    document.writeln("<h2>Given Data</h2>");
    document.writeln("First Name: " + firstName + "<br><br>");
    document.writeln("Last Name: " + lastName + "<br><br>");
    document.writeln("Gender: " + gender + "<br><br>");
    document.writeln("Email Adress: " + email + "<br><br>");
    document.writeln("Contact Number: " + contactNumber + "<br><br>");
}
