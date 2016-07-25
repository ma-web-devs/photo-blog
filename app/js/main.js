/**
 * Created by ma-web-devs on 7/25/16.
 */

// Load our API keys
import keys from './api-key';
import fileUploader from './file-uploader';

var config = {
  apiKey: keys.firebase_key,
  authDomain: "photoblog-11d60.firebaseapp.com",
  databaseURL: "https://photoblog-11d60.firebaseio.com",
  storageBucket: "photoblog-11d60.appspot.com"
};


firebase.initializeApp(config);

var database = firebase.database();

const firebaseUploader = new fileUploader();

firebaseUploader.setupFileInputChangeEvent(savePost);

function savePost(imageRef, title, body) {
  // A post entry.
  var title = document.getElementById('blog-title').value;
  var body = document.getElementById('blog').value;
  
  var postData = {
    body: body,
    title: title,
    imageRef: imageRef
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  
  var container = document.getElementById('blog-container');
  container.innerHTML = newPostKey;

  return firebase.database().ref().update(updates);
}
