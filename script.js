// ==============================
// STUDENT REGISTRATION
// ==============================

const studentForm = document.getElementById("studentForm");

if (studentForm) {

    studentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const student = {

            name: document.getElementById("name").value,

            regno: document.getElementById("regno").value,

            department:
                document.getElementById("department").value,

            year:
                document.getElementById("year").value,

            phone:
                document.getElementById("phone").value,

            email:
                document.getElementById("email").value
        };

        localStorage.setItem(
            "studentData",
            JSON.stringify(student)
        );

        window.location.href = "dashboard.html";
    });
}


// ==============================
// LOAD STUDENT DATA
// ==============================

const savedData =
    localStorage.getItem("studentData");

if (savedData) {

    const student = JSON.parse(savedData);


    // Dashboard name

    const welcomeName =
        document.getElementById("welcomeName");

    if (welcomeName) {
        welcomeName.innerText = student.name;
    }


    // Top profile

    const topName =
        document.getElementById("topName");

    if (topName) {
        topName.innerText = student.name;
    }


    const topDept =
        document.getElementById("topDept");

    if (topDept) {

        topDept.innerText =
            student.department +
            " • " +
            student.year;
    }


    // Avatar

    const avatarLetter =
        document.getElementById("avatarLetter");

    if (avatarLetter) {

        avatarLetter.innerText =
            student.name
                .charAt(0)
                .toUpperCase();
    }


    // Profile page

    const profileName =
        document.getElementById("profileName");

    if (profileName) {

        document.getElementById("profileName")
            .innerText = student.name;

        document.getElementById("profileReg")
            .innerText = student.regno;

        document.getElementById("profileDept")
            .innerText = student.department;

        document.getElementById("profileYear")
            .innerText = student.year;

        document.getElementById("profilePhone")
            .innerText = student.phone;

        document.getElementById("profileEmail")
            .innerText = student.email;
    }
}


// ==============================
// LOGOUT
// ==============================

function logout() {

    localStorage.removeItem("studentData");

    window.location.href = "index.html";
}