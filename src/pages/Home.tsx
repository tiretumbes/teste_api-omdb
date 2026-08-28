

import axios from 'axios'
import '../App.css'
import { useState } from 'react'

function Home() {
  const[filmes, setFilmes] = useState([]);
  const[busca, setBusca] = useState("");
 
  const chave = import.meta.env.VITE_API_KEY

  const buscaFilme = async () =>{
    try{
        const data = await axios.get("http://www.omdbapi.com/?apikey=" + chave + "&s=" + busca);

        setFilmes(data.data.Search);

    }

    catch(error){
      console.log(error)
    }
  }

  return (
    <>
      {chave}

      {
        filmes.map((filme: any) => {
          return(
            <div className="filme" key={filme.imdbID}>
              <h1>{filme.Title}</h1>
              <h3>{filme.Year}</h3>
              <img src={filme.Poster} alt={filme.Title} />
            </div>

            
          )
        }
        )
      } 

      <div className="busca">

      <input type="text" value={busca} onChange={(valor) => setBusca(valor.target.value)} />
      <button onClick={buscaFilme}>Buscar Filmes</button>
        </div>
    </>
  )
}

export default Home
