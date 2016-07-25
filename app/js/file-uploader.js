import is from './utils';


export default class FireBaseStorage {
  constructor(config) {
    // Not sure if this will need config.
    this.config = config || {};
    this.files = [];
  }

  getStorageReference() {
    const storage = firebase.storage().ref();
  }

  getFileReference(fullFilePath) {
    return this.getStorageReference().child(fullFilePath);
  }

  // This is just static version of above
  static getRef() {
    return firebase.storage().ref();
  }


  getFileInfo(fullFilePath) {
    const file = this.getFileReference(fullFilePath);
    return (file && is.isObject(file)) ? file : null;
  }

  static putFile(file, callback) {
    console.log(file);

    let uploadTask = FireBaseStorage.getRef().child(file.name).put(file);

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

    let preview = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;

    }, false);

    if (file) {
      FireBaseStorage.putFile(file, callback);
    }
  }

  setupFileInputChangeEvent(callback) {
    const fileInput = document.querySelector('input[type=file]');
    fileInput.onchange = function (evt) {
      FireBaseStorage.getFileFromInput(evt, callback);
    }
  }
}
