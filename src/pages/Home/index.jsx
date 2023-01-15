import { useEffect } from 'react'
import { useState } from 'react'
import { getTickersAltas, getTickersLowOfBig } from '../../api/api'
import { CardStocks } from '../../components/Card_Stocks'
import { Search } from '../../components/Search'
import './styles.css'
export const Home = () =>{
    const [risingStocks, setRisingStocks] = useState([]);
    const [stocksDown, setStocksDown ] = useState([]);

    const loadData = async () =>{
        setRisingStocks(await getTickersAltas())
        setStocksDown(await getTickersLowOfBig())
    }
    useEffect(()=>{
        loadData()
    },[])

    return(
    <div>
        <Search/>
        <div className="containerHome">
           <div className='stockMarketHighs'>
                <div className='titulo'> 
                    <p>Maiores Altas </p>
                    <abbr className='info' title="Média de volume diário de negociação acima de 5.000.000">i</abbr>
                    <span>⬈</span>
                </div>
                
                {risingStocks.slice(0,6).map((item,index)=>(
                    <CardStocks
                        key={index}
                        stock={item.stock}
                        name={item.name}
                        price={item.close.toFixed(2)}
                        variation={item.change.toFixed(2)}
                        logo={item.logo}
                    />
                ))}
           </div>

           <div className='stockMarketLosses'>
                <div className='titulo'> 
                    <p>Maiores Baixas  </p>
                    <abbr className='info' title="volume acima de 5.000.000">i</abbr>
                    <span>⬊</span>
                </div>
                {stocksDown.slice(0,6).map((item,index)=>(
                    <CardStocks
                        key={index}
                        stock={item.stock}
                        name={item.name}
                        price={item.close.toFixed(2)}
                        variation={item.change.toFixed(2)}
                        logo={item.logo}
                    />
                ))}
                
                
           </div>
        </div>
    </div>
    )
}