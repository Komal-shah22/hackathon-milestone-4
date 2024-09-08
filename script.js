
// function toggleForm() {
//     const form = document.getElementById('contactForm');
//     const generatedCV = document.getElementById('generated-cv');

//     if (form.style.display === "none") {
//         form.style.display = "block";
//         generatedCV.style.display = "none";
//     } else {
//         form.style.display = "none";
//     }
// }

// // Function to generate CV from form data
// function generateCV() {
//     // Get form values
//     const name = document.getElementById('name').value;
//     const jobTitle = document.getElementById('job-title').value;
//     const phone = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const aboutMe = document.getElementById('about-me').value;
//     const skill1 = document.getElementById('skill1').value;
//     const skill2 = document.getElementById('skill2').value;
//     const language1 = document.getElementById('language1').value;
//     const language2 = document.getElementById('language2').value;
//     const education1 = document.getElementById('education1').value;
//     const education2 = document.getElementById('education2').value;
//     const experience1 = document.getElementById('experience1').value;
//     const experience2 = document.getElementById('experience2').value;

//     // Display values in CV template
//     document.getElementById('cv-name').innerText = name;
//     document.getElementById('cv-job-title').innerText = jobTitle;
//     document.getElementById('cv-phone').innerText = phone;
//     document.getElementById('cv-email').innerText = email;
//     document.getElementById('cv-about-me').innerText = aboutMe;
//     document.getElementById('cv-skill1').innerText = skill1;
//     document.getElementById('cv-skill2').innerText = skill2;
//     document.getElementById('cv-language1').innerText = language1;
//     document.getElementById('cv-language2').innerText = language2;
//     document.getElementById('cv-education1').innerText = education1;
//     document.getElementById('cv-education2').innerText = education2;
//     document.getElementById('cv-experience1').innerText = experience1;
//     document.getElementById('cv-experience2').innerText = experience2;

//     // Hide form and show CV
//     document.getElementById('contactForm').style.display = "none";
//     document.getElementById('generated-cv').style.display = "block";
// }

function toggleForm() {
    const form = document.getElementById('contactForm');
    const generatedCV = document.getElementById('generated-cv');

    if (form.style.display === "none") {
        form.style.display = "block";
        generatedCV.style.display = "none";
    } else {
        form.style.display = "none";
    }
}

// Function to generate CV from form data
function generateCV() {
    // Get form values
    const name = document.getElementById('name').value;
    const jobTitle = document.getElementById('job-title').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const aboutMe = document.getElementById('about-me').value;
    const skill1 = document.getElementById('skill1').value;
    const skill2 = document.getElementById('skill2').value;
    const language1 = document.getElementById('language1').value;
    const language2 = document.getElementById('language2').value;
    const education1 = document.getElementById('education1').value;
    const education2 = document.getElementById('education2').value;
    const experience1 = document.getElementById('experience1').value;
    const experience2 = document.getElementById('experience2').value;

    // Display values in CV template
    document.getElementById('cv-name').innerText = name;
    document.getElementById('cv-job-title').innerText = jobTitle;
    document.getElementById('cv-phone').innerText = phone;
    document.getElementById('cv-email').innerText = email;
    document.getElementById('cv-about-me').innerText = aboutMe;
    document.getElementById('cv-skill1').innerText = skill1;
    document.getElementById('cv-skill2').innerText = skill2;
    document.getElementById('cv-language1').innerText = language1;
    document.getElementById('cv-language2').innerText = language2;
    document.getElementById('cv-education1').innerText = education1;
    document.getElementById('cv-education2').innerText = education2;
    document.getElementById('cv-experience1').innerText = experience1;
    document.getElementById('cv-experience2').innerText = experience2;

    // Hide form and show CV
    document.getElementById('contactForm').style.display = "none";
    document.getElementById('generated-cv').style.display = "block";
    
    // Show the edit button
    document.getElementById('edit-btn').style.display = "block";
}

// Function to edit CV
function editCV() {
    // Get current CV values
    const name = document.getElementById('cv-name').innerText;
    const jobTitle = document.getElementById('cv-job-title').innerText;
    const phone = document.getElementById('cv-phone').innerText;
    const email = document.getElementById('cv-email').innerText;
    const aboutMe = document.getElementById('cv-about-me').innerText;
    const skill1 = document.getElementById('cv-skill1').innerText;
    const skill2 = document.getElementById('cv-skill2').innerText;
    const language1 = document.getElementById('cv-language1').innerText;
    const language2 = document.getElementById('cv-language2').innerText;
    const education1 = document.getElementById('cv-education1').innerText;
    const education2 = document.getElementById('cv-education2').innerText;
    const experience1 = document.getElementById('cv-experience1').innerText;
    const experience2 = document.getElementById('cv-experience2').innerText;

    // Set form fields with current CV values
    document.getElementById('name').value = name;
    document.getElementById('job-title').value = jobTitle;
    document.getElementById('phone').value = phone;
    document.getElementById('email').value = email;
    document.getElementById('about-me').value = aboutMe;
    document.getElementById('skill1').value = skill1;
    document.getElementById('skill2').value = skill2;
    document.getElementById('language1').value = language1;
    document.getElementById('language2').value = language2;
    document.getElementById('education1').value = education1;
    document.getElementById('education2').value = education2;
    document.getElementById('experience1').value = experience1;
    document.getElementById('experience2').value = experience2;

    // Show the form and hide the CV
    document.getElementById('contactForm').style.display = "block";
    document.getElementById('generated-cv').style.display = "none";
}
