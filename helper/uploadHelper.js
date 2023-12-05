const fileModel = require("./../models/fileModels");

const uploadHelper = (filePath, fileSize, fileName) => {
  let pictures = new fileModel({
    file_path: filePath,
    size: fileSize,
    file_name: fileName,
  });

  return pictures.save();
};

module.exports = { uploadHelper };
