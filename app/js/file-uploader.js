import is from 'is';

class FireBaseStorage {
  constructor(config) {
    // Not sure if this will need config.
    this.config = config || {};
  }

  getStorageReference() {
    const storage = firebase.storage().ref();
  }

  getFileReference(fullFilePath) {
    return this.getStorageReference().child(fullFilePath);
  }

  getFileInfo(fullFilePath) {
    const file = this.getFileReference(fullFilePath);
    return (file && is.isObject(file)) ? file : null;
  }
}


function previewFile() {
  var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
