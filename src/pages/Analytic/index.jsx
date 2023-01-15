import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStock, getTickersFilter } from "../../api/api";
import { InfoFinance } from "../../components/Info_Finance";
import { formataData } from "../../dataFormat";
import "./styles.css";
export const Analytic = () => {
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [dataList, setDataList] = useState();
  const { stockName } = useParams();

  const loadData = async () => {
    const data = await getStock(stockName);
    const dataListFilter = await getTickersFilter(stockName);
    setData(data);
    setInfo(data.historicalDataPrice);
    setDataList(dataListFilter)
    console.log(dataList);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      {data && (
        <div>
          
          <div className="containerAnalytic">
            <div className="analyticHeader">
              <div className="logo">
                <img src={data.logourl} />
              </div>
              <div className="stock">
                <p className="ticker">{data.symbol}</p>
                <p className="name">{data.longName}</p>
              </div>
              <div className="price">
                <p className="priceStock">
                  R$ {data.regularMarketPrice.toFixed(2)}
                </p>
                <p className="variacao">
                  {data.regularMarketChangePercent.toFixed(2)} %
                </p>
              </div>
            </div>
          </div>

            <div className="analyticInfo">
              <InfoFinance
                title={"Setor"}
                valor={dataList.sector}
                logo={
                  "https://cdn-icons-png.flaticon.com/512/2386/2386205.png"
                }
              />
              <InfoFinance
                title={"Valor de mercado"}
                valor={data.marketCap ? `R$ ${data.marketCap.toLocaleString("pt-BR")}` : '' }
                logo={
                  "https://images.vexels.com/media/users/3/266066/isolated/lists/e502d2b262dd9f2537b50dcb72695313-a-cone-de-dinheiro-de-moeda-simples-de-cifra-o.png"
                }
              />

              <InfoFinance
                title={"Média de volume de negociação diária"}
                valor={data.averageDailyVolume3Month.toLocaleString("pt-BR")}
                logo={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLp1H9JyzHL7yE4SwAxi8o4GESL9sb2UFVfX_N01Yy9CQTl1J3xK1yShMYD8N6E17aDUE&usqp=CAU"
                }
              />
              
            </div>

            <div className="analyticBody">
              {info && (
                <>
                  {info.map((item, index) => (
                    <>
                      <div key={index}>
                        PREÇO: {item.close.toFixed(2)} //--// DIA:{" "}
                        {formataData(new Date(parseInt(`${item.date}000`)))}
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          
        </div>
      )}
    </>
  );
};
