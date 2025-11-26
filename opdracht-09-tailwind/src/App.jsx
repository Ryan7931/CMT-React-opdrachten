import './App.css'
import Logo from './assets/logo-workcation.png'
import MainPhoto from './assets/DameOpVakantie.png'

function App() {

  return (
    <section className="bg-gray-100">
    <section className='w-160 place-self-center '>
    <div className='flex place-self-center my-8 gap-5'>
      <img className='w-25 place-self-center' src= {Logo} />
      <h1 className='text-center text-black my-8 text-6xl font-bold'>Work<span className='text-purple-600' >Cation</span></h1>
    </div>
    <img className='place-self-center rounded-2xl shadow-2xl' src= {MainPhoto} />
    <h2 className='text-center text-7xl font-bold my-8'>You can work from anywhere. <span className='text-purple-600'>Take advantage of it.</span></h2>
    <p className='my-4 text-3xl'>WorkCation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're on vacation.</p>
    <button className='bg-purple-600 my-8 text-white p-5 w-70 rounded-2xl text-2xl'>BOOK YOUR ESCAPE</button>
   </section>
    </section>
  )
}

export default App;
