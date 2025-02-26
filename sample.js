// get all values 

let addingMail = document.getElementById('addingMail');
let user = document.getElementById('user');
let pass = document.getElementById('pass');
let date = document.getElementById('date');
let gender = document.getElementById('gender');
let email = document.getElementById('email');

let submit = document.getElementById('submit');
let error = document.querySelectorAll('#validationForm #error')

let getdetails = [];
let emailsarray = [];
let check = true;

window.onload = () => {
    getdetails = JSON.parse(localStorage.getItem('details')) || [];
}
let invitedemail=document.getElementById('invitedemail');
if(invitedemail){
invitedemail.addEventListener('click', () => {
    let p = document.createElement('p')
    p.className = 'invite';

    if (email.value == "" || !email.value.includes('gmail.com')) {
        alert("Invalid email format");
        return;
    }
    if (emailsarray.includes(email.value)) {
        alert("Already exists");
        return;
    }

    emailsarray.push(email.value);
    p.innerText = email.value;


    let i = document.createElement('i');
    i.className = 'fa-solid fa-square-xmark'

    i.addEventListener('click', () => {
        p.remove();
    })

    p.append(i)
    addingMail.append(p);
})
}
if(submit){
    submit.addEventListener('click', (ele) => {
        ele.preventDefault();
        check = true;
    
        if (user.value == "") {
            error[0].innerText = "Fill input value"; error[0].style.display = "block"; check = false
        } else { error[0].innerText = "" };
        if (pass.value == "") {
            error[1].innerText = "Invalid password value"; error[1].style.display = "block"; check = false
        } else { error[1].innerText = "" };
        if (date.value == "") {
            error[2].innerText = "Enter the date"; error[2].style.display = "block"; check = false
        } else { error[2].innerText = "" };
        if (gender.value == "") {
            error[3].innerText = "Fill gender details"; error[3].style.display = "block"; check = false
        } else { error[3].innerText = "" };
        if (email.value === "" || !email.value.includes('gmail.com')) {
            error[4].innerText = 'Invalid email format';
            error[4].style.display = "block"; check = false;
            return;
        } else { error[4].innerText = "" }
    
        if (check) {
            let obj = {
                username: user.value,
                password: pass.value,
                date: date.value,
                gender: gender.value,
                email: email.value,
                invited: emailsarray
            }
            getdetails.push(obj)
            console.log(getdetails)
            localStorage.setItem('details', JSON.stringify(getdetails))
        }
    
    })
}


    let tablebody = document.querySelector('#table tbody');

    if (tablebody) {

        window.addEventListener('DOMContentLoaded', () => {

            getdetails = JSON.parse(localStorage.getItem('details')) || [];
            console.log(getdetails)
            if (getdetails.length === 0) { alert("No user details") }

            else {
                getdetails.forEach((user) => {
                    let row = document.createElement('tr');
                    console.log(user)

                    let usernames = document.createElement('td');
                    usernames.innerText = user.username;

                    let passwords = document.createElement('td');
                    passwords.innerText = user.password;

                    let dobs = document.createElement('td');
                    dobs.innerText = user.date;

                    let genders = document.createElement('td');
                    genders.innerText = user.gender;

                    let emails = document.createElement('td');
                    emails.innerText = user.email;

                    let invitedmail = document.createElement('td');
                    invitedmail.textContent = user.invited

                    let remove = document.createElement('td');
                    remove.innerText = 'DEL'

                    remove.addEventListener('click', () => {
                        let index = getdetails.findIndex((current) => {
                            return current.username == user.username;
                        })
                        row.remove();
                        getdetails.splice(index, 1);
                        localStorage.setItem('details', JSON.stringify(getdetails))
                    })

                    row.append(usernames, passwords, dobs, genders, emails, invitedmail, remove)
                    tablebody.append(row)
                })
            }

        })
    }