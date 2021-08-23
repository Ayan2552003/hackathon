let rname = document.querySelector("#r-name")
let email = document.querySelector("#email")
let country = document.querySelector("#country")
let city = document.querySelector("#city")
let password = document.querySelector("#password")

function signup(){
    
    let user = {
    ernamevalue: rname.value,
     emailvalue: email.value,
     countryvalue: country.value,
     cityvalue: city.value,
     passwordvalue: password.value
    }
    firebase.auth().createUserWithEmailAndPassword(emailvalue, passwordvalue)
  .then((userCredential) => {
    // Signed in 
    var uid = userCredential.user.uid;

    firebase.database().ref(`Resturant/${uid}`).set(user) 
    .then(()=>{
        alert('User is created');
        location.href = "login.html";
    })
    .catch((error)=>{
        var message = error.message;
        console.log(message);
    })

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


