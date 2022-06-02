import * as multer from 'multer'
import * as fs from 'fs'
import * as path from 'path'
import { UploadPath } from '../utils/enum'
import { FILE_PATH } from '../utils/constants'

const imageFilter = (req, file, cb) => {
  const isImage = ['image/jpeg', 'image/jpg', 'image/png'].includes(file.mimetype)

  req.fileTypeError = !isImage
  cb(null, isImage)
}

const uploadSingleImage = (type: string, uploadPath: UploadPath) => {
  const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(process.cwd(), `${FILE_PATH}/image/${uploadPath || ''}`))
    },
    filename: (req, file, cb) => {
      cb(null, new Date().getTime() + '-' + file.originalname.replace(/\s/g, ''))
    }
  })

  return mul.single(type)
}

export { uploadSingleImage, fileRemover }
