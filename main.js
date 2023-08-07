let btn = document.getElementsByClassName('mybuttons');
let loginForm = document.getElementById('loginForm');
let signUpForm = document.getElementById('signUpForm');
let loginSuccessfull = document.getElementById('loginSuccessfull');
let myalert = document.getElementById('alert');

//Right click disabled alert
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    myalert.classList.remove('hidden');
    setTimeout(() => {
        myalert.classList.add('hidden');
    }, 3000);
    return;
});

function openLoginPopUp() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.add("opacity-0");
    }
    loginForm.classList.remove("scale-0");
    loginForm.classList.add("scale-100");
}

function openSignUpPopUp() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.add("opacity-0");
    }
    signUpForm.classList.remove("scale-0");
    signUpForm.classList.add("scale-100");
}

function closePopUp() {
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("opacity-0");
    }
    loginForm.classList.remove("scale-100");
    loginForm.classList.add("scale-0");
    signUpForm.classList.remove("scale-100");
    signUpForm.classList.add("scale-0");
}

//Password visibility toggler
let psdLogin = document.getElementById("passwordLoginForm")
let psdSign = document.getElementById("passwordSignUp")
function eyeButton() {
    if (psdLogin.type === 'password' || psdSign.type === 'password') {
        // If the input type is currently 'password', change it to 'text'
        psdLogin.type = 'text';
        psdSign.type = 'text';
    } else {
        // Otherwise, change it back to 'password'
        psdLogin.type = 'password';
        psdSign.type = 'password';
    }
}

// Set the max attribute of the DOB input element to today's date
const dobInput = document.getElementById("DOB");
const today = new Date();
const maxDate = today.toISOString().split('T')[0];
dobInput.setAttribute("max", maxDate);

//Making selected radio's label bold
function setLabelBold(selectedRadiosID) {
    let labels = document.querySelectorAll('label')

    for (var i = 0; i < labels.length; i++) {
        if (labels[i].getAttribute('for') === selectedRadiosID) {
            labels[i].classList.add("font-semibold");
        }
        else {
            labels[i].classList.remove("font-semibold");
        }
    }
}


const toast = document.getElementById('toastbox');

function loginMsg() {
    const username = document.querySelector('#loginForm input[name="username"]').value.trim();
    const password = document.querySelector('#loginForm input[name="password"]').value.trim();

    if (!username || !password) {
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
        return;
    }

    loginForm.classList.remove("scale-100");
    loginForm.classList.add("scale-0");
    loginSuccessfull.classList.remove("top-0", "scale-0");
    loginSuccessfull.classList.add("scale-100");
}

function closeLoginMsg() {
    loginSuccessfull.classList.remove("scale-100");
    loginSuccessfull.classList.add("top-0", "scale-0");
    forgotMsg.classList.remove("scale-100")
    forgotMsg.classList.add("scale-0")

    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("opacity-0");
    }
}

let SuccessfullMsg = document.getElementById("SuccessfullMsg");
let passWarningMsg = document.getElementById("passWarning");

function displaySuccessMsg() {
    // Check if all input fields in the Sign Up form are not empty
    const firstName = document.querySelector('#signUpForm input[name="firstname"]').value.trim();
    const lastName = document.querySelector('#signUpForm input[name="lastname"]').value.trim();
    const email = document.querySelector('#signUpForm input[name="email"]').value.trim();
    const phoneNumber = document.querySelector('#signUpForm input[name="phonenumber"]').value.trim();
    const password = document.querySelector('#signUpForm input[name="password"]').value.trim();
    const confirmPassword = document.getElementById("Confirmpassword").value.trim();
    const dob = document.getElementById("DOB").value.trim();
    const gender = document.querySelector('input[name="Gender"]:checked');

    if (!firstName || !lastName || !email || !phoneNumber || !password || dob === "" || !gender) {
        // Display toast notification if any required field is empty

        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
        return;
    }
    //Password Validation
    const containsLetter = /[a-zA-Z]/.test(password);
    if (password.length < 8) {
        passWarningMsg.innerHTML = "**Password length must be atleast 8 characters";
        passWarningMsg.classList.remove("hidden");
        return;
    }
    else if (!containsLetter) {
        passWarningMsg.innerHTML = "**Password must contain at least one letter";
        passWarningMsg.classList.remove("hidden");
        return;
    }
    else if (!/\d/.test(password)) {
        passWarningMsg.innerHTML = "**Password must contain at least one number";
        passWarningMsg.classList.remove("hidden");
        return;
    }

    //Password mismatch warning
    if (password != confirmPassword) {
        passWarningMsg.innerHTML = "**Password & Confirm password does not match!!";
        passWarningMsg.classList.remove("hidden");
        return;
    }
    else {
        passWarningMsg.classList.add("hidden");
        signUpForm.classList.remove("scale-100");
        signUpForm.classList.add("scale-0");
        SuccessfullMsg.classList.remove("scale-0");
        SuccessfullMsg.classList.add("scale-100");
    }
}


function continueBtn() {
    SuccessfullMsg.classList.remove("scale-100");
    SuccessfullMsg.classList.add("scale-0");
    for (var i = 0; i < btn.length; i++) {
        btn[i].classList.remove("opacity-0");
    }
}

//Displaying forgot password box
let forgotMsg = document.getElementById("forgotMsg");

function displayForgotMsg() {
    loginForm.classList.remove("scale-100");
    loginForm.classList.add("scale-0");
    forgotMsg.classList.remove("scale-0")
    forgotMsg.classList.add("scale-100")

}

// Displaying reset link sent msg
let resetLink = document.getElementById("resetLink");

function resetBtn() {
    resetLink.classList.remove('hidden');
    setTimeout(() => {
        resetLink.classList.add('hidden');
    }, 3000);
    return;
}