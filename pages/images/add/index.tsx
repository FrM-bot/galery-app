import { ChangeEvent, FormEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { Button } from 'components/button'
import { ImagePost } from 'server/POST_IMAGE'
import Head from 'next/head'
import Layout from 'components/Layout'
import { IImage } from 'interface/Image'
import { useRouter } from 'next/router'

export default function AddImage() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescriptin] = useState<string>('')
  const [image, setImage] = useState<Blob | null>()
  // const [imageName, setImageName] = useState<string>()

  const imageRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  function handlerImage(e: ChangeEvent<HTMLInputElement>) {
    const types = /jpg|png|jpeg/
    
    const resultTypes = types.test(imageRef.current?.files[0]?.type)
    
    if (!resultTypes) return alert('Debe selecionar uan imagen')
    
    setImage(e.target.files[0])
    // console.log(imageRef.current?.files[0].type)
  }

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(title)
    console.log(description)
    console.log(image)

    if (!image) return alert('Seleccione una imagen')

    if (title.trim().length === 0) return alert('Introduzca un título a la imagen')

    const Image: IImage = {
      title,
      description,
      image
    }

    ImagePost(Image)
      .then(res => {
        console.log(res)
        setTitle('')
        setDescriptin('')
        setImage(null)
        router.replace('/')
      })
      .catch(err => console.error(err))
  }
    return(
      <Layout>
        <>
        <Head>
          <title>
            Add image
          </title>
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <form onSubmit={(e) => handlerSubmit(e)} className="flex flex-col gap-4 shadow-xl p-4 rounded-md">

            <input className="w-full bg-green-100 focus:outline-none p-2 rounded-lg" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />

            <textarea className="w-full bg-green-100 focus:outline-none p-2 rounded-lg" name="description" placeholder="Description" value={description} onChange={(e) => setDescriptin(e.target.value)} />

            <div>
              <label htmlFor="file-upload" className="custom-file-upload bg-green-100 rounded-md p-2 cursor-pointer">
                {
                  imageRef.current?.files[0] ? imageRef.current?.files[0].name : 'Seleccione una imagen'
                }               
              </label>
              <input ref={imageRef} id="file-upload" className="hidden" type="file" onChange={(e) => handlerImage(e)}/>
            </div>
            <div>
              <Button>
                Submit
              </Button>
            </div>
          </form>
        </main>
        </>
      </Layout>
    )
}