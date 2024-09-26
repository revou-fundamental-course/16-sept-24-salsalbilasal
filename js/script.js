// Ini Javascript

function replaceName() {
    let name = prompt('Masukkan nama Anda');
    console.log(name)
    document.getElementById('user-name').innerHTML = name;
}

replaceName();

function validateForm() {
    let name = document.form["message-form"]["full-name"].value;
    let birthDate = document.form["message-form"]["birth-date"].value;
    let gender = document.form["message-form"]["gender"].value;
    let messages = document.form["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert ("Tidak boleh ada kolom yang kosong");
        return false;
    }
    
     

    setSenderUI(name, birthDate, gender, messages);

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let indexSlide = 1;
showSlide();

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(index) {
    //Get DOM semua Image Banner
    let listImage = document.getElementsByClassName('photo-banner');
    console.log(indexSlide);

    // Reset IndexSlide
    if (index > listImage.length) indexSlide = 1

    // Hide All Images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none'
        i++;
    }

    //Show Selected Image
    listImage[indexSlide - 1].style.display = 'block';
    console.log(indexSlide);
}

//Autorun Banner Photo
setInterval(() => nextSlide(1), 2000);
