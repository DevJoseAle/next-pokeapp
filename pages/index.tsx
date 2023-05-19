import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import React from 'react'
import Layout from '../components/layouts/Layout';
import { NextPage } from 'next';
import { GetStaticProps } from 'next'
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import PokemonCard from '@/components/pokemon/PokemonCard';

type Props= {
  pokemons: SmallPokemon[]
}

const HomePage : NextPage<Props> = ({pokemons}) => {

  const pokemonList = pokemons;
  return (
    
    <Layout>

      <Grid.Container gap={3} justify='space-around'>
        {
          pokemonList.map((pokemon) => 
            (
              <PokemonCard key={pokemon.id}pokemon={pokemon}/>
            ))
      }
      </Grid.Container>
    </Layout>
    
    )
  }



  
export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons : SmallPokemon[] = data.results.map((poke, i) =>({
    ...poke,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {

      pokemons
      
    }
  }
}

  export default HomePage;
