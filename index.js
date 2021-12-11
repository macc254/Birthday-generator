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
    if (gender == "Male") {
        if (dateOfBirth == 0)

    }

})