const toggleFavorite = (id : number) =>{

    console.log('Desde Toggle Favorite');
    //Array de ids, que se parsea del local storage, de no haber nada retorna
    //un string vacio
    let favorites : number[] = JSON.parse(localStorage.getItem('favorites') || '[]') 

    //evaluamos que no exista ya el id:
    if(favorites.includes(id)){
        favorites = favorites.filter((pokeid) => pokeid !== id)
    }else{
        favorites.push(id)
    }

    //Grabamos en el localstorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

}

export default{
    toggleFavorite
}