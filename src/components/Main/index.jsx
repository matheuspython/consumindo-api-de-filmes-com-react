import { useState, useEffect } from "react"
import {api} from '../../services/api'

import './style.css'


export const Main=()=>{
  const [filmes, setFilmes] = useState([]);
  
  useEffect(()=>{
    api.get('/').then(response => setFilmes(response.data))  
  },[])

  return (
    <main className="main">
      <div className="container">
        {filmes.map(filme => (
            <article className="box">
            <img src={filme.img} alt={filme.filme} />
            <h2>{filme.filme}</h2>
            <p>{filme.descricao}</p>
        </article>
        ))}
      </div>
    </main>
  )
}