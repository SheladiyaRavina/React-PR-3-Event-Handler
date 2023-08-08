import logo from './logo.svg';
import './App.css';
import Data from './Data';
import './Data.css';
import { useState } from 'react';

function App() {
  const[check,setCheck] = useState(Data);

  const dinner = () => {
    const dinnerData = Data.filter((v) =>{
       return(v.category === 'dinner') 
    } )
    setCheck(dinnerData)
  }
  
  const breakfast = ()=>{
    const breakfastData = Data.filter((v) =>{
      return(v.category === 'breakfast') 
   } )
   setCheck(breakfastData)
  }
  const lunch = ()=>{
    const lunchData = Data.filter((v) =>{
      return(v.category === 'lunch') 
   } )
   setCheck(lunchData)
  }
  const all = ()=>{
    const allData = Data.filter((v) =>{
      return(v.category) 
   } )
   setCheck(allData)
  }

  return (
   <>
    <center>
      
    <br></br><br></br>
      <button onClick={()=>lunch()} >Lunch</button>
      <button onClick={()=>breakfast()}>Breakfast</button>
      <button onClick={()=>dinner()}>Dinner</button>
      <button onClick={()=>all()}>All</button>
      <br></br><br></br>
    {
      check.map((v)=>{
        return(
         <div className='container'>
          <div className='card '>
            <div className='img'> <img src={v.img} width={320}></img></div>
            <div className='name'>{v.name}</div>
            <div className='price'>Price :- {v.price}</div>
            <div className='btn'> Order Now</div>
           </div>
          </div>
        )
      })
    }
     </center>
   </>
  );
}

export default App;
