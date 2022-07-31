import React, {useState} from 'react';
import '../Custom.css'


const DataTable=()=>{
    const[codes,setData]=useState([])

    const fetchDate=g=>{
        const query2=g.target.value
        let output2=''
        let id=''
        let today = new Date();
        let startDate=today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+today.getDate();
        let endDate=document.getElementById("endDate").value;
        fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${query2}/${endDate}/${startDate}/`)

        .then(response=>{
            return response.json()
        })
        .then(date=>{
            setData(date)
        let Mid=date.rates
        let output=`<h2>Wykaz kursów od ${endDate} do  ${startDate}  </h2>
                    `
        Mid.forEach(function(item){
            output+=`
                <div>
                    <td>${item.no}<td>
                    <td>${item.effectiveDate}<td>
                    <td id='id.mid'>${item.mid}<td>
                </div>
               `    
            /*let mT= new Object(item)
            mT['mid2']=''+item.mid+','
            let ite=(item.mid2)
            console.log(ite)
                output2=`
                <img src="https://image-charts.com/chart?chan&chd=${ite}
                &chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf44336%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C009688%2C1
                &chs=700x190&cht=p3" alt="Static Chart"/>`*/
        })
        document.getElementById('tabela').innerHTML=output;
        document.getElementById('wykres').innerHTML=output2;
        })
    }
    return(
    <section>
        <div>
            <h2>Wyszukaj średniego kursu walut według zakresu</h2>
            <input type="date" id="endDate"></input>
            <input onChange={fetchDate}/>
        </div>
        <div id="tabela">
        </div>
        <div id='wykres'>
        </div>
    </section>
    );
}



export default DataTable;

/*



*/ 