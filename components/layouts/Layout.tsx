import Head from 'next/head'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { Navbar } from '../ui'
import styles from '@/styles/Home.module.css';

type Props ={
    children: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

const Layout : FC<Props> = ({children, title}) => {

    console.log(origin)
  return (
    <>
        <Head>
            <title>
                {title || 'Pokemon App'}
            </title>
            <meta name="author" content={`José Rodriguez`} />
            <meta name="description" content={`informacion del pokemon ${title}`} />
            <meta name="keywords" content={`pokedex, pokemon, ${title}`} />
            <meta property="og:title" content={`Información sobre ${title}`} />
            <meta property="og:description" content={`Esta pagina es sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/pokemonimg.jpeg`} />
        </Head>

        {/* NavBar */}
        <Navbar/>

        <main style={{
            padding: '0 20px'
            
        }}>
            {children}
        </main>
    </>
  )
}

export default Layout