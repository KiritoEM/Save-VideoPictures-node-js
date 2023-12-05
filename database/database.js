const mongoose = require('mongoose');

const ConnectDB= async  () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGODB_COMPASS_URI);

            console.log('connexion successfully with files-save DB...')
}

catch(err){
      console.log(err);
      console.log('connexion failed ith Database')
      process.exit();
}
}

module.exports=ConnectDB;