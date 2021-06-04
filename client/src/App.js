import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import './App.css';

function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setCardList(response.data)
    })
  }, []);

  return (
    <div className="App">
      {cardList.map((val) =>{
        return <img src={process.env.PUBLIC_URL + '/images/cards-full-art/' + val.name + '.png'}  alt={val.name} />
      })}
    </div>
  );
}

export default App;
