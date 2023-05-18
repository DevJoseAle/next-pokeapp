import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { localFavorites } from '@/utils'
import Layout from '@/components/layouts/Layout'
import FavoritePokemons from '@/components/pokemon/FavoritePokemons'
import NoFavorites from '@/components/ui/NoFavorites'


const FavoritesPage : NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
  useEffect(() => {
    const favoriteList = localFavorites.favoritePokemons();
    setFavoritePokemons(favoriteList);
  }, [])
  
  
  return (
    <Layout title='Favoritos'>
        {
          favoritePokemons.length === 0
          ? (<NoFavorites/>)
          : (<FavoritePokemons pokemons={favoritePokemons}/>)
        }
    </Layout>
  )
}

export default FavoritesPage