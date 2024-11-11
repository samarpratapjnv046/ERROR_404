import express from 'express'

import { addalbum,removeAlbum,listAlbum } from '../controllers/albumController.js'

import upload from '../middleware/multer.js'

const albumRouter = express.Router();

albumRouter.post('/add',upload.single('image'),addalbum);
albumRouter.get('/list',listAlbum);
albumRouter.post('/remove',removeAlbum);

export default albumRouter;