const { uploadHelper } = require("./../helper/uploadHelper");

const uploadController = async (req, res) => {
  try {
    let file_path = req.file.path;
    let file_name = req.file.originalname;
    let file_size = req.file.size;
    let response = await uploadHelper(file_path, file_size, file_name);

    if (response) {
      res.status(201).json({ response, message: "fichier sauvegardé" });
      console.log("envoyé");
    } else {
      res.status(500).json("Erreur lors de l' envoi du fichier");
      console.log("erreur de l' envoi");
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploadController };
