
console.log("Running Sal's Strawberries")

var GLOBAL_user = null;

function writeForm(){

    // Get the form data
    const favoriteFruit =
        document.getElementById("favoriteFruit").value;

    console.log(favoriteFruit);
}


function fb_popupLogin() {

    var provider =
        new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)

    .then((result) => {

        GLOBAL_user = result.user;

        console.log("User has logged in");

        console.log(GLOBAL_user.displayName);

        console.log(GLOBAL_user.email);

    });

}

