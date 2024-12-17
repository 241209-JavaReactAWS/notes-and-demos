
/*
Inside this component, I'll show a simple way to perform a fetch request and an Axios request, I'll go into more
detail on the differences tomorrow but we'll look at a basic example for now
*/

import axios from "axios"
import { SyntheticEvent, useState } from "react"

function AxiosFetch() {

    // What I plan to do is send an HTTP request to some API

    const [pokemonName, setPokemonName] = useState('')
    const [pokemon, setPokemon] = useState<any>({})

    let updatePokemonInput = (e:SyntheticEvent) => {
        setPokemonName((e.target as HTMLInputElement).value)
    }

    let searchWithFetch = async () => {
        // We used fetch to send simple API requests that were fully customizable
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        let data = await res.json()
        console.log(data)
        setPokemon(data)
    }

    /*
    Axios is an additional library we can pull in for sending HTTP requests
    Why we would want this?
        - Centrally configured requests
        - Better error handling
        - Automatically parses JSON
    */

    let searchWithAxios = async () => {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        console.log(res)
        setPokemon(res.data)
    }


  return (
    <div>
      <label>
        Enter Pokemon: <input type="text" id="pokemon-name-field" onChange={updatePokemonInput}/>
      </label>
      <button onClick={searchWithFetch}>Search For Pokemon With Fetch!</button>
      <button onClick={searchWithAxios}>Search For Pokemon With Axios!</button>

      <h1>Pokemon: </h1>

      {/* Conditional Rendering: Rendering certain HTML based off some condition */}
      {
        pokemon.name != null ?

        <>
            <h1>Pokemon Name: {pokemon.name}</h1>
            <img src={pokemon.sprites.front_default}/>
        </>
        :
        <></>
      }
      {/* We'll add in an image in just a second */}
    </div>
  )
}

export default AxiosFetch
