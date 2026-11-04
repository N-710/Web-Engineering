// Task 1 & 5: Submit btn --> Success Msg + Age Verification for Special Discount
let form = document.getElementById("contactForm");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let msg = document.getElementById("successMessage");
let birthYear = document.getElementById("birth-year");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    let name = nameInput.value;
    let email = emailInput.value;

    if (name && email) {

        let year = parseInt(birthYear.value);
        let age = 2026 - year;

        if (age >= 18 && age <= 25) {

            msg.textContent = "Thank you, " + name +
                "! You qualify for the student discount. " +
                "We'll contact you soon at " + email + ".";

        } else if (age >= 60) {

            msg.textContent = "Thank you, " + name +
                "! You qualify for the senior discount. " +
                "We'll contact you soon at " + email + ".";

        } else {

            msg.textContent = "Thank you, " + name +
                "! You do not qualify for a special discount. " +
                "We'll contact you soon at " + email + ".";
        }
    }
});

// Task 2: Table Row Highlighting
let rows = document.querySelectorAll("tr");
for(let i=0; i<rows.length; i++){

    rows[i].addEventListener("mouseover", function() {
        rows[i].style.backgroundColor = "#dbeafe";
    });

    rows[i].addEventListener("mouseout", function() {
        rows[i].style.backgroundColor = "";
    });

};

// Task 3: Toggle dark/light theme
let themeBtn = document.getElementById("themeBtn")
themeBtn.addEventListener("click", function() {

    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }

});

// Task 4: Course Total Calculator

let courses = document.querySelectorAll(".course");
let total = document.getElementById("total");

for (let i = 0; i < courses.length; i++) {
    courses[i].addEventListener("change", function() {
        let sum = 0;
        for (let j = 0; j < courses.length; j++) {
            if (courses[j].checked) {
                sum = sum + Number(courses[j].value);
            }
        }
        total.textContent = "Total: $" + sum;
    });
}

// Task 6: Read More / Read Less
let extraText = document.getElementById("extraText");
let readMoreBtn = document.getElementById("readMoreBtn");

extraText.style.display = "none";

readMoreBtn.addEventListener("click", function() {
    if (extraText.style.display == "none")
    {
        extraText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    } 
    else
    {
        extraText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
});

// Task 7: Course Category Filter
let allBtn = document.getElementById("allBtn");
let techBtn = document.getElementById("techBtn");
let businessBtn = document.getElementById("businessBtn");
let designBtn = document.getElementById("designBtn");

let techCourses = document.querySelectorAll(".tech");
let businessCourses = document.querySelectorAll(".business");
let designCourses = document.querySelectorAll(".design");

allBtn.addEventListener("click", function()
{
    for (let i = 0; i < techCourses.length; i++) 
    {
        techCourses[i].style.display = "";
    }
    for (let i = 0; i < businessCourses.length; i++) 
        {
        businessCourses[i].style.display = "";
    }
    for (let i = 0; i < designCourses.length; i++) 
    {
        designCourses[i].style.display = "";
    }
});

techBtn.addEventListener("click", function() 
{
    for (let i = 0; i < techCourses.length; i++) {
        techCourses[i].style.display = "";
    }
    for (let i = 0; i < businessCourses.length; i++)
    {
        businessCourses[i].style.display = "none";
    }
    for (let i = 0; i < designCourses.length; i++) 
    {
        designCourses[i].style.display = "none";
    }
});

businessBtn.addEventListener("click", function() 
{
    for (let i = 0; i < techCourses.length; i++) 
    {
        techCourses[i].style.display = "none";
    }
    for (let i = 0; i < businessCourses.length; i++) 
    {
        businessCourses[i].style.display = "";
    }
    for (let i = 0; i < designCourses.length; i++) 
    {
        designCourses[i].style.display = "none";
    }
});

designBtn.addEventListener("click", function() 
{
    for (let i = 0; i < techCourses.length; i++) 
    {
        techCourses[i].style.display = "none";
    }
    for (let i = 0; i < businessCourses.length; i++) 
    {
        businessCourses[i].style.display = "none";
    }
    for (let i = 0; i < designCourses.length; i++) 
    {
        designCourses[i].style.display = "";
    }
});


// Task 8: Dynamic Opening Status
let hours = new Date().getHours();
let statusBanner = document.getElementById("status");

if (hours >= 8 && hours <= 21) 
{
    statusBanner.textContent = "We are Open!";
    statusBanner.style.color = "green";
} 
else 
{
    statusBanner.textContent = "Closed - Open at 8 AM";
    statusBanner.style.color = "red";
}

// Task 9: Special Notes Character Counter
let specialNotes = document.getElementById("special-notes");
let charCount = document.getElementById("charCount");

specialNotes.addEventListener("input", function() 
{
    let remaining = 100 - specialNotes.value.length;
    charCount.textContent = remaining + " characters remaining";
});