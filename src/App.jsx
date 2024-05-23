import './App.css'
import Header from './components/Header'
import MyCard from './components/MyCard'

function App() {
  const cards = [
    {
      url: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
      nombre: "Mestizo",
      descripcion: "Perro adorable, familiar, jugueton y sociable."
    },
    {
      url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Labrador",
      descripcion: "Perro jugueton, inquieto, mordelon."
    },
    {
      url: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg",
      nombre: "Pug",
      descripcion: "Perro mañoso, independiente, dormilon."
    }
  ]

  return (
    <>
      <div>
        <Header title="Adopta un Perrito"/>
        <div className='container mt-3'>
          <div className='row'>
            {cards.map((card, index) => (
              <div className='col-md-4' key={index}>
                <MyCard {...card}/>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default App
