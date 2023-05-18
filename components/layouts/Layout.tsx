import Head from 'next/head'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { Navbar } from '../ui'
import styles from '@/styles/Home.module.css';

type Props ={
    children: ReactNode,
    title?: string
}

const Layout : FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>
                {title || 'Pokemon App'}
            </title>
            <meta name="author" content="José Rodriguez" />
            <meta name="description" content="informacion del pokemon XXXX" />
            <meta name="keywords" content="pokedex, pokemon, xxxx" />
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