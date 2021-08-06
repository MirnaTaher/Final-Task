// declaring variables
// boolean indicators returns true if the value matches the validations requirements
var booleanName ;
var booleanEmail ;
var booleanPassword ;

// values for the input
var userName = "undefined";
var userEmail = "undefined";
var userPassword = "undefined";


// making the arrow up hidden when the scroller is at the top and
// showing it when we start scrolling
window.onscroll = function () {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    // scrolling for 700px show the nav bar (give it position sticky)
    document.querySelector(".navbar").classList.add("sticky-top");
  } else if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    // arrow up shows up after scrolling for 100px
    document.querySelector(".arrow-up").style.visibility = "visible";
  } else {
    // make the arrow up hidden if I still hasn't scrolled down for 100px
    document.querySelector(".arrow-up").style.visibility = "hidden";
    // make the navbar sticky when I scroll more than 200px
    document.querySelector(".navbar").classList.remove("sticky-top");
  }
};


/* tried to change the sticky nav bar but it didn't work
window.onscroll = function(){
    if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
        document.querySelector(".sticky-top").style.position = "static";
      } else {
        break;
    }
}*/

// form validation
document.getElementById("inputForm").addEventListener("onsubmit", function (event) {
    // prevent the submission
    // what happens when we click on submit
    if (booleanName && booleanEmail && booleanPassword) {
      document.getElementById("formSubmit").nextElementSibling.innerText="Thanks for submitting our form!"
      document.getElementById("formSubmit").nextElementSibling.classList.add("text-success", "fs-1")
      document.getElementById("formSubmit").nextElementSibling.classList.remove("text-danger")

    } else {
      event.preventDefault();
      if(userName === "undefined") {
        document.getElementById("formName").nextElementSibling.innerText = requiredFeild()   
      }  
      if(userEmail === "undefined"){
        document.getElementById("formEmail").nextElementSibling.innerText = requiredFeild()
      }
      if (userPassword === "undefined"){
        document.getElementById("formPassword").nextElementSibling.innerText = requiredFeild()
        
      }
      document.getElementById("formSubmit").nextElementSibling.innerText="please fill the form with correct information"
    }
  });
function requiredFeild(){
  return "This Feild is Required!"
}

// i want the return values to be boolean (true or false)
// check if the user starts inputting his data
var valName = document.getElementById("formName").addEventListener("input", function (event) {
  var regExpName = /^[a-zA-Z ]{3,30}$/;
  userName = event.target.value.trim();
    if (regExpName.test(userName)) {
      removeError("formName")
      booleanName = true;
    } 
    else {
      addError("formName", "please enter your correct name")
      booleanName = false;
      
    }
  });

// userEmail is the email that the user inputs
var valEmail = document.getElementById("formEmail").addEventListener("input", function (event) {
    var RegExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // idk why we use this part but it didn't work untill I used it
    userEmail = event.target.value
    if (RegExpEmail.test(userEmail)) {
      removeError("formEmail")
      booleanEmail = true;
    } else {
      addError("formEmail","please enter a correct email")
      booleanEmail = false;
    }
});

// userPassword is the password that the user inputs
var valPassword = document.getElementById("formPassword").addEventListener("input", function (event) {
    var RegExpPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // this returns the html code for the target element
    // event.target.value returns the value
    userPassword = event.target.value
    // if password matches the regular expression requirements
    if(RegExpPassword.test(userPassword)){
      removeError("formPassword")
      booleanPassword=true;
    }
    // if it doesn't match the regular expression requirements
    else{
      addError(
        "formPassword",
        "please make sure your password has an upper case and a lower case and a special character and a number and at least 8 characters"
      )
      booleanPassword=false;
    }
});
function addError(idName, msg){
  document.getElementById(idName).nextElementSibling.innerText = msg
}
function removeError(idName){
  document.getElementById(idName).nextElementSibling.innerText = " "
}
