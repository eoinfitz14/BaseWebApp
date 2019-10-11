function handleSignIn(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log("Email console.log: " + user.email);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

function addMessage(postTitle,postBody){
  var postData = {
    title: postTitle,
    body: postBody
  }
  // Get a reference to the database service
  var database = firebase.database().ref("posts");

  var newPostRef = database.push();
  newPostRef.set(postData);
}

function handleMessageFormSubmit(){
  // grab values from index.ejs
  var postTitle = $("#post-title").val();
  var postBody = $("#post-body").val();
  console.log("This is the post title: " + postTitle);
  console.log("This is the post body: " + postBody);
  addMessage(postTitle,postBody);

}