
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Navbar';
import data from './data'
import Card from './components/Card';

console.log(data)




function App() {

  const mapCard = data.map(item =>{
    return (
      <Card 

      key={item.id}
      {...item}
      
      />
    )
  })


  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <section className="card--display">
        {mapCard}
      </section>
     
      
    </div>
  );
}

export default App;
