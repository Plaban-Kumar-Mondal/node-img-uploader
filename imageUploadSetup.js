const multer = require("multer");
const path = require("path"); // this is a nodejs module

// Set storage engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, callBack) {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 700000, // maximum file size is 700kb
  },
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
}).single("imageFile");

// Check File Type Function
function checkFileType(file, callback) {
  // Allowed extensions

  const fileTypes = /jpeg|jpg|png|gif/;
  // check the extension
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // check mimeType
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extname) {
    return callback(null, true);
  } else {
    callback("Error: Images only!");
  }
}

module.exports = upload;
