import Layout from 'components/Layout'
import { IImageResponse } from 'interface/Image'
import { GET_IMAGES } from 'server/GET_IMAGES'
import Card from 'components/card'
import Link from 'next/link'
import { Button } from 'components/button'

interface Props {
  allImages: IImageResponse[] | null
}

export default function Home({ allImages }: Props) {
  console.log('hola')
  if (!allImages) {
    return(
      <Layout>
        <div className="grid place-content-center min-h-full">
          <Button
          onClick={() => location.reload()}
          >
            Reload
          </Button>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <div className="grid grid-cols-5 gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {
          allImages !== null &&
          allImages.map((image: IImageResponse) => {
            return (
              <Link href={`images/view/${image.id}`} key={image.id}>
                <a>
                  <Card title={image.title} description={image.description} imgUrl={image.imgUrl} />
                </a>
              </Link>
            )
          })
        }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    console.log('before')
    const allImages = await GET_IMAGES()
    console.log('after')
    return {
      props: {
        allImages: allImages ? allImages : null
      }
    }
  } catch (error) {
    console.error({ error })
  }
}