import React, {useState} from 'react';
import '../Custom.css'

const TenTable=()=>{
    const[tables,setTable]=useState([])

    const fetchDate=f=>{
        const query3=f.target.value
        let output3=''
        let output4=''
        fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${query3}/last/10/`)

        .then(response=>{
            return response.json()
        })
        .then(table=>{
            setTable(table)
        let Mid=table.rates
        let MidCharts=table.rates
        let output3=`<h2>Wykaz ostatnich 10 średnich kursów ${tables.currency}  </h2>
                    `
        MidCharts.forEach(function(item){
            output3+=`
                <div>
                    <td>${item.no}<td>
                    <td>${item.effectiveDate}<td>
                    <td id='${item.mid}'>${item.mid}<td>
               `    
               //console.log(item)
        })

        document.getElementById('tab').innerHTML=output3;
        console.log(table)
        })
    }
    return(
    <section>
        <div className='box'>
            <h2>Wyszukaj 10 ostatnich kursów </h2>
            <form name='search' className='input' onmouseout="this.value = ''; this.blur();">
                <input onChange={fetchDate}/>
            </form>
            <i class="fas fa-search"></i>
        </div>
        <div>
        {tables.length > 0 && (
            <ul>
            {tables.map(table => (
                <li key={table.no}>{table.mid}</li>
            ))}
            </ul>
        )}
        </div>
        <div id="tab">
        </div>
    </section>
    );
}

export default TenTable;

/*



*/ 