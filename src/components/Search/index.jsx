import { useEffect, useState } from "react";
import { getTickers } from "../../api/api";
import { CardStocks } from "../Card_Stocks";
import "./styles.css";

export const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState();

  const loadData = async () => {
    setData(await getTickers());
  };
  useEffect(()=>{
    loadData()
  },[])

    const searchInput = () =>{
        if(!inputSearch){
            setDataFilter(null)
            alert('Digite o nome de uma empresa ou seu ticker!')
        }else{
           let filtered = data.filter((obj)=>{
            return obj.stock.includes(inputSearch.toUpperCase()) || obj.name.includes(inputSearch.toLocaleUpperCase())
        })
        setDataFilter(filtered) 
        }   
    }


  return (
    <div className="containerSearch">
      <div className="search">
        <img
          src="https://cdn-icons-png.flaticon.com/512/49/49116.png"
          className="searchLogo"
        />
        <input
          type="search"
          placeholder="Digite o nome da empresa ou tickter"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button onClick={searchInput}>Pesquisar</button>
      </div>
      <div className="results">
        {dataFilter&&
            dataFilter.map((item,index)=>(
                <CardStocks key={index}
                    stock={item.stock}
                    price={item.close.toFixed(2)}
                    logo={item.logo}
                    name={item.name}
                    variation={item.change.toFixed(2)}

                />
            ))
        }
      </div>
    </div>
  );
};
