/**************************************************************
 **************************************************************
 **                                                          **
 ** fb_io.js is where you will put common firebase functions **
 ** used throughout your code.                               **
 **                                                          **
 **************************************************************
 **************************************************************/
// function fb_authenticate(){
//     // authenticate with Google
   

//   firebase.auth().signInWithPopup(provider).then((result) => {
//     GLOBAL_user = result.user;  // Save the user details object to a global variable
//     console.log("User has logged in")
//   });

// }

// function fb_error(){
//     // Don't forget your error handling!
// }
var GLOBAL_user;

// Set up listener
function fb_login() {
  authenticationListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

// Handle login state
function fb_handleLogin(_user) {
  if (_user) {
    console.log("User is logged in");
    GLOBAL_user = _user;
  } else {
    console.log("User is NOT logged in");
  }
}

// Google popup login
function fb_popupLogin() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("User has logged in");
  });
}