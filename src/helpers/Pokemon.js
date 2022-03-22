
import axios from 'axios'
const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
const pokemons = []

const formatPokemon = (pokemon) => {
    let formatPokemon = {}
    const gender = ['FEMALE','MALE']
    formatPokemon = {
        name : pokemon.data.name,
        image: pokemon.data.sprites.front_shiny,
        gender: gender[Math.round(Math.random())],
        moves: pokemon.data.moves
    }
    return formatPokemon
} 

export const fetchPokemons = async (start=0, end=100 ) => {
    let page = []
   if(pokemons.length  >= end){
       page = pokemons.slice(start,end-1)
   }else{
       const interval = {
           limit: end,
           offset: start
       }
       const list = await P.getPokemonsList(interval)
     
       for(let item of list.results){
            let resultPokemon = await axios.get(item.url)
            try {
                //const gender = await axios.get(`https://pokeapi.co/api/v2/gender/${item.url.split('https://pokeapi.co/api/v2/pokemon/')[1]}`)  
                const pokemon = formatPokemon(resultPokemon)
                pokemons.push(pokemon) 

            } catch (error) {
                console.error("The resource was not found!!")
            } 
       }
       page = pokemons.slice(start,end-1)
   }
   return page
}

export const savePokemon = () => {
    //axios.post()
    console.log('Not done yet')
}
