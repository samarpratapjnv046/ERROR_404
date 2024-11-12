//use to extract the song data mp3 data image which we get from the frontend 


import multer from "multer";

const storage = multer.diskStorage({
    filename : function(req,file,callback){
        callback(null,file.originalname);
    }
})

const upload = multer({storage});

// extract the file from API request 
export default upload ;
