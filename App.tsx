import React, { useState } from 'react'
import { get } from './services'
import './App.css'
import { PokemonData } from './types'
import { Evolution } from './evolution'

const App = () => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null)
  const [formValue, setFormValue] = useState<string>('')
  const [evolution, setEvolution] = useState<Evolution | null>(null)

  const getPokemon = async () => {
    return get<PokemonData>(`pokemon/${formValue}`).then((pokemon) => {
      setPokemon(pokemon)
      return pokemon
    })
      .catch(() => {
        console.log('deu ruim')
      })
  }

  const pokemonEvolution = (currentPokemon: PokemonData) => {
    get<Evolution>(`evolution-chain/${currentPokemon?.id}`).then((evolution) =>
      setEvolution(evolution)
    )
      .catch((e) => {
        console.log('Achooou' + e)
      })
  }
  // 1. obter id do pokemon buscado
  // 2. passar id na chamada de evolution-chain/id
  // 3. setar retorno no estado
  // 4. renderizar informações de evolução


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.currentTarget.value.toLowerCase())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formValue === '') {
      return
    }
    getPokemon().then((pokemon) => pokemonEvolution(pokemon))

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name or Number"></input>
        </label>

      </form>

      {pokemon && (
        <div className="container">
          <img alt="Pokemon" src={pokemon.sprites.front_default} />
          <div className="divTable">
            <div className="divTableBody">
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{pokemon.types[0].type.name}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Height</div>
                <div className="divTableCell">
                  {""}
                  {Math.round(pokemon.height)}</div></div>

              <div className="divTableRow">
                <div className="divTableCell">Weight</div>
                <div className="divTableCell">{""}{Math.round(pokemon.weight)}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Number of Battles</div>
                <div className="divTableCell">{pokemon.game_indices[0].game_index}</div>
              </div>

            </div>
          </div>
          <div className="evolution">Evolves to:
            <div className="evolution-sprite">{evolution?.chain.evolves_to[0].species.name}</div></div>
        </div>
      )}

    </div>
  )
}

export default App