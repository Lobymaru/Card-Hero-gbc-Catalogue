import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import './App.css';
import CardItem from './components/CardItem'

function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setCardList(response.data)
    })
  }, []);

  console.log(cardList)

  return (
    <>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {cardList.map((val) =>{
              return <CardItem name={val.name} id={val.id_cards} />
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
