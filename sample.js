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
let check=true;

window.onload=()=>{
    getdetails =JSON.parse(localStorage.getItem('details')) || []; 
}

document.getElementById('invitedemail').addEventListener('click',()=>{
    let p=document.createElement('p')
    p.className='invite';
    
    if(email.value == "" || !email.value.includes('gmail.com')){
        alert("Invalid email format");
        return;
    }
    if(emailsarray.includes(email.value)){
        alert("Already exists");
        return;
    }
   
    emailsarray.push(email.value);
    p.innerText=email.value;
    

    let i=document.createElement('i');
    i.className='fa-solid fa-square-xmark'

    i.addEventListener('click',()=>{
        p.remove();
    })

    p.append(i)
    addingMail.append(p);
})

submit.addEventListener('click',(ele)=>{
    ele.preventDefault();
    check=true;

    if(user.value == ""){
        error[0].innerText="Fill input value"; error[0].style.display="block"; check=false}else{error[0].innerText=""};
    if(pass.value== ""){
        error[1].innerText="Invalid password value"; error[1].style.display="block"; check=false}else{ error[1].innerText=""};
    if(date.value== ""){
        error[2].innerText="Enter the date"; error[2].style.display="block"; check=false}else{error[2].innerText=""};
    if(gender.value== ""){
        error[3].innerText="Fill gender details"; error[3].style.display="block"; check=false}else{ error[3].innerText=""};
    if(email.value === "" || !email.value.includes('gmail.com')) {
        error[4].innerText='Invalid email format';
        error[4].style.display="block" ; check=false;
        return;}else{error[4].innerText=""}

    if(check){
        let obj={
             username:user.value,
             password:pass.value,
             date:date.value,
             gender:gender.value,
             email:email.value,
             invited:emailsarray
             }
             getdetails.push(obj)
             console.log(getdetails)
             localStorage.setItem('details',JSON.stringify(getdetails))      
     }

})
document.getElementById('viewdetails').addEventListener('click',()=>{
    window.location.href="details.html";
})