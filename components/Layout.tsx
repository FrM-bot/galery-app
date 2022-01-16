import Head from 'next/head'
import { ButtonLink } from './button'
import Link from 'next/link'

interface Props {
  children: JSX.Element
}

export default function Layout({children}: Props) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Gallery app</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="min-w-full shadow-lg p-8">
          <div className="flex justify-between mx-auto items-center max-w-7xl">
  
            <div>
              <h1 className="text-3xl">
                <Link href="/">
                    Gallery app
                </Link>
              </h1>
            </div>
  
            <nav> 
              <ul>
                <li>
                  <ButtonLink href='/images/add'>
                    Add image  
                  </ButtonLink>
                </li>
              </ul>
            </nav>
  
          </div>
        </header>
        
       <main className="min-h-screen w-full max-w-7xl px-4 my-8">
          {children}
        </main>
  
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    )
}