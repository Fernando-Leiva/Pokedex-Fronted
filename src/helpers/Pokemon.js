
import axios from 'axios'
const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
const pokemons = []

const formatPokemon = (pokemon) => {
    let formatPokemon = {}
    formatPokemon = {
        name : pokemon.data.name,
        image: pokemon.data.sprites.front_shiny,
        gender: pokemon.gender,
        moves: pokemon.data.moves
    }
    return formatPokemon
} 

export const fetchPokemons = async (start = 0,end = 100) => {
    let page = []
   if(pokemons.length  >= end){
       page = pokemons.slice(start,end-1)
   }else{
       const interval = {
           limit: end,
           offset: start
       }
       const list = await P.getPokemonsList(interval)
       console.log('list',list)
       for(let item of list.results){
            let resultPokemon = await axios.get(item.url)
            try {
                const gender = await axios.get(`https://pokeapi.co/api/v2/gender/${item.url.split('https://pokeapi.co/api/v2/pokemon/')[1]}`)
                resultPokemon.gender = gender.data.name
                const pokemon = formatPokemon(resultPokemon)
                pokemons.push(pokemon) 

            } catch (error) {
                console.error("The resource was not found!!")
                resultPokemon.gender = 'Gender not specified'
                const pokemon = formatPokemon(resultPokemon)
                pokemons.push(pokemon) 
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
