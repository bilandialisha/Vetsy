// Function to update pet information
function updatePetInfo() {
    const newName = prompt("Enter pet's name:");
    if (newName === null) return;
    const newAge = prompt("Enter pet's age:");
    if (newAge === null) return;
    const newWeight = prompt("Enter pet's weight:");
    if (newWeight === null) return;
    const newVaccinations = prompt("Enter pet's vaccinations:");
    if (newVaccinations === null) return;
    const newMedications = prompt("Enter pet's medications:");
    if (newMedications === null) return;
    const newNotes = prompt("Enter any notes:");
    if (newNotes === null) return;

    // Update the HTML with new pet data
    document.getElementById('petName').textContent = newName;
    document.getElementById('petAge').textContent = newAge;
    document.getElementById('petWeight').textContent = newWeight;
    document.getElementById('vaccinations').textContent = newVaccinations;
    document.getElementById('medications').textContent = newMedications;
    document.getElementById('notes').textContent = newNotes;
}

// Function to update physical exam checklist
function updatePhysicalExam() {
    const physicalExamItems = document.querySelectorAll('#physicalExamList li');
    physicalExamItems.forEach(item => {
        const newValue = prompt(`Enter value for ${item.dataset.item}:`);
        if (newValue === null) return; // Exit function if user cancels
        item.dataset.status = newValue;
    });
}

// Add event listener to radio buttons for dynamic updates
document.querySelectorAll('.btnn1').forEach(button => {
    button.addEventListener('click', updatePetInfo);
});

// Add event listener to the "Update Information" button
// document.getElementById('updateBtn').addEventListener('click', updatePhysicalExam);


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
