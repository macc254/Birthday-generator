var birthDate = document.getElementById("birthDate")
birthDate.addEventListener('click', function(e) {
    e.preventDefault();
    alert("Hello")

    var dob = document.querySelector("#date").value;
    var year = document.querySelector("#year").value;
    var show = document.querySelector(".show");
    var gender = document.querySelector("#gender").value;
    var month = document.querySelector("#month").value;


    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date2 = parseInt(dob);
    var date3 = month + " " + date2 + " " + year;
    var finalDate = new Date(date3);

    //const Div1 = document.createElement('div');
    //Div1.classList.add('display');

    const Div1 = document.getElementById("Div1");


    const todoItem = document.createElement('li')
    todoItem.classList.add('display')
    Div1.appendChild(todoItem)
    show.appendChild(Div1);

    let dateOfBirth = date3.getDay();
    if (gender == "Male")
        if (dateOfBirth == 0) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[0] + ". you were born on " + days[0]
            }
        }
    if (gender == "Male")
        if (dateOfBirth == 1) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[1] + ". you were born on " + days[1]
            }
        }
    if (gender == "Male")
        if (dateOfBirth == 2) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[2] + ". you were born on " + days[2]
            }
        }
    if (gender == "Male")
        if (dateOfBirth == 3) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[3] + ". you were born on " + days[3]
            }
        }
    if (gender == "Male")
        if (dateOfBirth == 4) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[4] + ". you were born on " + days[4]
            }
        }
    if (gender == "Male")
        if (dateOfBirth == 5) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[5] + ". you were born on " + days[5]
            }
        }
    if (gender == "Male")
        if (dateOfBirth == 6) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + maleNames[6] + ". you were born on " + days[6]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 0) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[0] + ". you were born on " + days[0]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 1) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[1] + ". you were born on " + days[1]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 2) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[2] + ". you were born on " + days[2]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 3) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[0] + ". you were born on " + days[3]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 4) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[0] + ". you were born on " + days[4]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 5) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[0] + ". you were born on " + days[5]
            }
        }
    if (gender == "Female")
        if (dateOfBirth == 6) {
            {
                todoItem.innerHTML = "Your Akan Ghanian name is " + femaleNames[0] + ". you were born on " + days[6]
            }
        }
})