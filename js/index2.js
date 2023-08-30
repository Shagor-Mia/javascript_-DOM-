let Form = document.querySelector('#Form')
let username = document.querySelector('#UserName')
let email = document.querySelector('#E-mail')
let password = document.querySelector('#Password')
let repassword = document.querySelector('#Re-Password')

function showErrors(input,message){
    FormControl = input.parentElement
    FormControl.className = "form-control error"
  let small =  FormControl.querySelector("small")
  small.innerText = message;
}

function showSuccess(input){
    FormControl = input.parentElement
    FormControl.className = "form-control success"
}

function checkMail(input){
    const RegEx =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(RegEx.test(input.value)){
        showSuccess(input)
    }
    else{
        showErrors(input,"invalid email!")
    }
}

function checkInputlength(input,min,max){
    if(input.value.length<min){
        showErrors(input,`${GetfieldName(input)} must be atleast ${min} characters`)
    }
    else if(input.value.length>max){
        showErrors(input,`${GetfieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input)
    }
}

function GetfieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showErrors(input2,'password is not same! try again.')
    }
}

Form.addEventListener("submit",(e)=>{
  e.preventDefault();
  checkInputlength(username,3,20)
  checkInputlength(password,6,30)
  checkMail(email)
  checkPasswordMatch(password,repassword)

})