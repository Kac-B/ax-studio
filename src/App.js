import React, { useState} from 'react';
import './Custom.css'
import DataTable from './Components/dataTable.js'
import TenTable from './Components/tenTable.js'

const App=()=>{
  const[items,setItems]=useState([])
  
  const fetchData=e=>{
    const query = e.target.value 
    
    fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${query}`)
    .then(response=>{
      return response.json()
    })
    .then(data=>{
      setItems(data)
      let Mid=data.rates[0].mid
      //console.log(Mid)
      document.getElementById("kursŚredni").innerHTML=Mid
    })
  }
  return (
  <section>
    <div className='Container'>
      <div className='row'>
        <div className='innerdiv'>
          <TenTable/>
        </div>
        <div className='innerdiv'>
          <h2>Wyszukaj dzisiejszego średniego kursu walut</h2>
            <input onChange={fetchData}/> 
            <div>
              <p>{items.currency} </p>
              <p>{items.code}</p> 
              <p id="kursŚredni"></p>
            </div>
        </div>
        <div className='innerdiv'>
          <DataTable/>
        </div>
      </div>
    </div>
  </section>
  );
}

export default App;

