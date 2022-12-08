import './App.css';
import Card from './Components/Card';
import Pagination from './Components/Pagination';
import { useState, useEffect } from 'react';

function App() {
  const [info, setInfo] = useState({});
  const [cards, setCards] = useState([]);
  const url = `https://rickandmortyapi.com/api/character`;
  async function getCards(apiUrl){
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setCards(data.results);
      setInfo(data.info);
    })
    .catch(()=> alert("404"));
  }
  const next = () => {
    getCards(info.next);
  }
  
  const prev = () => {
    getCards(info.prev);
  }
 useEffect(()=>{
  getCards(url);
 },[]);
  return (
    <div className="container-fluid">
    <h1 className="text-center my-3">Rick And Morthy App</h1>
    <div>
      <div className="d-flex flex-row flex-column justify-content-center flex-wrap-wrap">
        {
          cards.map((el) =>(
            <Card key={el.id} image={el.image} title={el.name} status={el.status} specie={el.species}/>
          ))
        }
      </div>
     </div>
     <Pagination prev={info.prev} next={info.next} onPrev={prev} onNext={next} />
    </div>
  );
}

export default App;
