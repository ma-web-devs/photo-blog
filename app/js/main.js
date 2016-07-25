/**
 * Created by ma-web-devs on 7/25/16.
 */

// Load our API keys
import keys from 'api-key.js';

console.log(keys);

var firebase = require("firebase/app");
    require("firebase/auth");
    require("firebase/database");
    require("firebase/storage");

var config = {
    apiKey: keys.firebase_key,
    authDomain: "photoblog-11d60.firebaseapp.com",
    databaseURL: "https://photoblog-11d60.firebaseio.com",
    storageBucket: "photoblog-11d60.appspot.com",
};

firebase.initializeApp(config);

