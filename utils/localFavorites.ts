const toggleFavorite = (id : number) =>{

    console.log('Desde Toggle Favorite');
    
    let favorites : number[] = JSON.parse(localStorage.getItem('favorites') || '[]') 

   
    if(favorites.includes(id)){
        favorites = favorites.filter((pokeid) => pokeid !== id)
    }else{
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));

}


const existInFavorite = ( id : number ) : boolean =>{

    if(typeof window == 'undefined') return false;
    
    const favorites : number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
} 

const favoritePokemons = () : number[] =>{

    const favoritesLS : number[] = JSON.parse(localStorage.getItem('favorites') || '')
    
    return favoritesLS

}

export default{
    toggleFavorite,
    existInFavorite,
    favoritePokemons
}