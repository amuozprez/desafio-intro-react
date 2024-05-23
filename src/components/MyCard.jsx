import Tags from "./Tags"

function MyCard({url, nombre, descripcion}) {
  return (
    <div className='card'>
        <img className="img" src={url} alt={nombre} />
        <div className="card-body">
            <h5 className='title-card'>{nombre}</h5>
            <p className='description'>{descripcion}</p>
        </div>
    </div>
  )
}

export default MyCard