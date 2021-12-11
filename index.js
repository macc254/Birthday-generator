var birthDate = document.querySelector("#birthDate")
birthDate.addEventListener('click', function(e) {
    e.preventDefault();

    var date1 = document.querySelector("#date").value;
    var year = document.querySelector("#year").value;
    var show = document.querySelector(".show");
    var gender = $("#gender").val();
    var month = $("#month").val();
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    var date2 = parseInt(date1);
    var date3 = month + "" + date2 + "" + year;
    var finalDate = new Date(date3);

    const Div1 = document.createElement('div');
    Div1.classList.add('display');

    let dateOfBirth = finalDate.getDay();
    if (gender == "Male" && dateOfBirth == 0) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[0] + ". you were born on " + days[0];
    }
    if (gender == "Male" && dateOfBirth == 1) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[1] + ". you were born on " + days[1];
    }
    if (gender == "Male" && dateOfBirth == 2) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[2] + ". you were born on " + days[2];
    }
    if (gender == "Male" && dateOfBirth == 3) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[3] + ". you were born on " + days[3];
    }
    if (gender == "Male" && dateOfBirth == 4) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[4] + ". you were born on " + days[4];
    }
    if (gender == "Male" && dateOfBirth == 5) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[5] + ". you were born on " + days[5];
    }
    if (gender == "Male" && dateOfBirth == 6) {
        todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[6] + ". you were born on " + days[6];
    }

})