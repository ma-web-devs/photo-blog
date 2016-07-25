import is from './utils';


export default class FireBaseStorage {
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
  
  getFileFromInput() {

    let preview = document.querySelector('img');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    reader.addEventListener("load", function () {
      preview.src = reader.result;
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      console.log(file);
    }
  }

  setupFileInputChangeEvent(id) {
    const fileInput = document.querySelector('input[type=file]');
    fileInput.onchange = function (evt) {
      this.getFileFromInput(evt);
    }
  }
}
