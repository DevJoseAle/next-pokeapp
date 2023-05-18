import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'
import Logo from '../logo/Logo';
import styles from '@/styles/Home.module.css';



export const Navbar = () => {

  const {theme} = useTheme();
  return (
    <div style={{
        display: 'flex',
        width : '100%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px, 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>

        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png"
          alt="icono de app"
          width={70}
          height={70}
        />

        <NextLink href="/" passHref>
            <Link>

              <Text color='white' h2>P</Text>
              <Text color='white' h3>okemon</Text>
        
            </Link>
            
        </NextLink>

        <Spacer 
          css={{flex: '1'}}
          
        />

        <NextLink  href="/favorites/" passHref>
            <Link>

              <Text color='white'h5 css={{marginRight: '20px'}}>Favoritos</Text>
        
            </Link>
            
        </NextLink>
    </div>
  )
}
