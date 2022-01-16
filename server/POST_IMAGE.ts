import { IImage } from "../interface/Image"

export const ImagePost = async ({ title, description, image }: IImage) => {

  const body = new FormData()

  body.append('title', title)
  body.append('description', description)
  body.append('image', image)

  try {
    const res = await fetch('http://localhost:8000/images/post', {
      method: 'POST',
      body
    }) 
    const resJson = await res.json()
    return resJson
  } catch (error) {
    console.error(error)
  }
}