import { Button } from 'components/button'
import Layout from 'components/Layout'
import { IImageResponse } from 'interface/Image'
import Head from 'next/head'
import { DELETE_IMAGE } from 'server/DELETE_IMAGE'
import { GET_IMAGES } from 'server/GET_IMAGES'
import { GET_ONE_IMAGE } from 'server/GET_ONE_IMAGE'
import { useRouter } from 'next/router'

interface Props {
    image: IImageResponse
}
export default function ViewImage({ image }: Props) {
    const router = useRouter()
    console.log(image)
    function deleteImage(id: string) {
        console.log(id)
        DELETE_IMAGE(id)
            .then((res) => {
                console.log(res)
                router.replace('/')
            })
            .catch((err) => console.error(err))
    }
    return (
        <Layout>
            <>
                <Head>
                    <title>
                        {
                            image.title
                        }
                    </title>
                </Head>
                <Button className="my-8"
                    onClick={() => router.back()}
                >
                    Back
                </Button>
                <div>
                    <div className="rounded-lg overflow-hidden grid place-items-center h-auto shadow-md hover:shadow-xl transition-all">
                        <img
                            src={image.imgUrl}
                            alt={image.title}
                            className="hover:scale-110 w-full transition-all duration-500"
                        />
                    </div>
                    <p className="shadow-sm p-2 my-4 rounded-bl-xl rounded-tr-xl text-center">
                        {
                            image.title
                        }
                    </p>
                    {
                        image.description.trim().length > 0 &&
                        <p className="shadow-sm p-2 my-4 rounded-bl-xl rounded-tr-xl text-center">
                            {
                                image.description
                            }
                        </p>
                    }
                    <Button
                    className="bg-red-400 hover:bg-red-300"
                    onClick={() => deleteImage(image.public_id)}>
                        Delete
                    </Button>
                </div>
            </>
        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const images: IImageResponse[] = await GET_IMAGES()
        const paths = images.map((image) => {
            return {
                params: { id: image.id }
            }
        })
        console.log(paths)
        return {
            paths,
            fallback: false
        }
    } catch (error) {
        console.error(error)
    }
}

interface IParams {
    params: {
        id: string
    }
}

export async function getStaticProps({ params }: IParams) {
    // Fetch necessary data for the blog post using params.id
    console.log('params', params)
    try {
        const image = await GET_ONE_IMAGE(params.id)
        console.log(image)
        return {
            props: {
                image
            }
        }
    } catch (error) {
        console.error(error)
    }
}