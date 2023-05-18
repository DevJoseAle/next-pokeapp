import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

const NoFavorites = () => {
  return (
    <Container
          css={{
            height:'calc(100vh - 100px)',
            display:'flex',
            flexDirection:'column',
            alignItems : 'center',
            justifyContent:'center',
            alignSelf:'center'
          }}
          >
            <Text h1 > Aun no hay Favoritos</Text>

            <Image 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg" 
              alt='Snorlax'
              width={250}
              height={250}
              css={{
                opacity: 0.6
              }}
              />
        </Container>
  )
}

export default NoFavorites