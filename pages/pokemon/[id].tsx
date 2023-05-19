import React, { useEffect, useState } from 'react'
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { pokeApi } from '@/api';
import Layout from '@/components/layouts/Layout'
import { Pokemon } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

interface Props {
  pokemon : Pokemon;

}

const PokemonPage : NextPage<Props> = ({pokemon}) => {
  


  const [isInFavorite, setisInFavorite] = useState(localFavorites.existInFavorite(pokemon.id))
  const onClickFavorite = () =>{
    localFavorites.toggleFavorite(pokemon.id);
    setisInFavorite(!isInFavorite);

    if(!isInFavorite){
      confetti({
        zIndex: 999,
        particleCount: 70,
        spread: 160,
        angle: -100,
        origin:{
          x: 1,
          y: 0,
        },
        shapes: ['star']
      })
    }
  }

   
  return (
    <Layout title={pokemon.name.toUpperCase()}>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{padding: '30px'}}>
            <Card.Body>

              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'No-Image'}
                alt={pokemon.name}
                width="100%"
                height={200}

                />

            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8} >

          <Card>
            <Card.Header css={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Text h1 transform='capitalize'>
                {pokemon.name}
              </Text>

              <Button 
              onClick={onClickFavorite}
              color='gradient'
              ghost={ !isInFavorite }
              > 
              { isInFavorite ? 'Quitar de Favoritos' : 'Agregar a favoritos'}
              
              </Button>

            </Card.Header>

            <Card.Body>
              <Text size={30} >
                Sprites
              </Text>

              <Container display='flex' direction='row'>
                <Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image
                src={pokemon.sprites.front_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                />
                <Image
                src={pokemon.sprites.back_shiny}
                alt={pokemon.name}
                width={100}
                height={100}
                />
              </Container>
            </Card.Body>
          </Card>

        </Grid>
      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths :  GetStaticPaths = async (ctx) => {

  const pages151 = [...Array(151)].map((v, index) =>`${index + 1}`)
  return {
    paths: pages151.map((id) =>({ 
      params: {id}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

  const { id }= params as {id : string}
  
  const pokemon = await getPokemonInfo( id )

  if(!pokemon){
    return{
      redirect: {
        destination: '/',
        permanent: false,

      } 
    }
  }

    return {
      props: {
        pokemon: pokemon
      },
      revalidate: 86400, //Tiempo en segundos
    }
}


export default PokemonPage