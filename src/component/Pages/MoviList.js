import React from 'react'
import Movidcard from'./Movidcard';
import { Datas } from "./Data";
import FormSearch from './FormSearch'
import QueryList from './QueryList';
import { useState } from 'react';


export default function MoviList() {
  const[tilte,setTilte] = useState("")
  const [movies,setMovies] = useState(Datas)

  return (
    <>
    <form style={{textAlign:"center", marginTop:25}}>
        <input type="search" name= "search" onChange={(e) => setTilte(e.target.value)} style={{with:150,borderRadius:25,height:50}}/>
    </form>   
    <div style={{background:"black",marginTop:70, 
    justifyContent:"space-between", justifyItems:"center", color:"white"}}>

     {movies.filter((movie)=>
      movie.Titre.toLocaleLowerCase().includes(tilte) 
      ||movie.Titre.toLocaleUpperCase().includes(tilte)

     ).map((el,index) =>(    
        <div>
            <Movidcard  key={index} Titre={el.Titre} PostUrl={el.PostUrl} Description= {el.Description}/>
        </div>
         ))}
        
    </div>
   <div> <QueryList movies={movies} setMovies={setMovies}/></div> 
    
    
        
        
        </>
  )
}
