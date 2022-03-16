import { useState } from 'react'
import Resizer from 'react-image-file-resizer'

export const useImageUpload = () => {
  const [image, setImage] = useState()

  const resizeFile = file =>
    new Promise(resolve => {
      Resizer.imageFileResizer(
        file,
        3000,
        2000,
        'JPEG',
        Math.floor(1000 / (file.size / 1000)),
        0,
        uri => {
          resolve(uri)
        },
        'base64'
      )
    })

  const upload = async event => {
    try {
      const file = event.target.files[0]
      const img = await resizeFile(file)
      setImage(img)
    } catch (err) {
      console.log(err)
    }
  }

  return {
    upload,
    image,
  }
}
