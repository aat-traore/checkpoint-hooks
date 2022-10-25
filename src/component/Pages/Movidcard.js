const Movidcard=(props)=>{

  return (
      
      <>
      <div style={{border:10}} >
        <h2>{props.Titre}</h2>
        <img src={props.PostUrl} alt='poster img' />
        <p style={{textAlign:"center"}}>{props.Description}</p>
      </div>
      </>
        


        
    )
}
export default Movidcard;