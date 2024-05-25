function toggle(event) {
    event.preventDefault();
    var form = document.getElementById('appointmentForm');
    if (form.checkValidity()) {
        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
    } else {
        alert("Please fill out all the fields before booking the appointment.");
    }
}

function resetForm() {
    var form = document.getElementById('appointmentForm');
    form.reset();
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.classList.remove('active');
    resetForm();
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
}
