import is from './utils';


export default class FireBaseStorage {
  constructor(config) {
    // Not sure if this will need config.
    this.config = config || {};
    this.files = [];
  }

  static getStorageReference() {
    const storage = firebase.storage().ref();
  }

  static getFileReference(fullFilePath) {
    return FireBaseStorage.getStorageReference().child(fullFilePath);
  }

  // This is just static version of above
  static getStorageReference() {
    return firebase.storage().ref();
  }

  static putFile(file, callback) {

    let uploadTask = FireBaseStorage.getStorageReference().child(file.name).put(file);

    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // See below for more detail
      console.log('State changed from fb!', snapshot);
    }, function(error) {
      // Handle unsuccessful uploads
      console.error('ERROR ERROR!', error);
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      callback(uploadTask.snapshot.downloadURL);
    });
  }


  static getFileFromInput(evt, callback) {

    let file = document.querySelector('input[type=file]').files[0];

    if (file) {
      FireBaseStorage.putFile(file, callback);
    }
  }

  static setupFileInputChangeEvent(callback) {
    const fileInput = document.querySelector('input[type=file]');
    fileInput.onchange = function (evt) {
      FireBaseStorage.getFileFromInput(evt, callback);
    }
  }
}
