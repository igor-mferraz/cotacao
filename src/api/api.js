const BASE = 'https://brapi.dev'

export const getStock = async (stock) => {
    let response = await fetch (`https://brapi.dev/api/quote/${stock}?range=6mo&interval=1mo&fundamental=true`);
    let data = await response.json();
    return data.results[0]
}

export const getTickers = async () =>{
    let response = await fetch (`https://brapi.dev/api/quote/list`);
    let data = await response.json();
    return data.stocks
}



export const getTickersFilter = async (stock) =>{
    let response = await fetch ('https://brapi.dev/api/quote/list');
    let data = await response.json();
    let dataFiltered = data.stocks.filter((obj)=>{return obj.stock === stock})
    return dataFiltered[0]
}


export const getTickersVolume = async () =>{
    let response = await fetch(`https://brapi.dev/api/quote/list?sortBy=volume&sortOrder=desc&limit=20`);
    let data = await response.json();
    return data.stocks
}


export const getTickersVolumeAndChange = async () =>{
    let response = await fetch(`https://brapi.dev/api/quote/list?sortBy=change&sortOrder=desc&limit=200`);
    let data = await response.json();
    let filtered =  data.stocks.filter((obj)=>{return obj.volume > 1000})
    return filtered
    
}



//requisições da home 
export const getTickersAltas = async () =>{
    let response = await fetch(`https://brapi.dev/api/quote/list?sortBy=change&sortOrder=desc&limit=200`);
    let data = await response.json();
    let filtered =  data.stocks.filter((obj)=>{return obj.volume > 5000000})
    return filtered
    
}


export const getTickersLowOfBig = async () => {
    let response = await fetch(`https://brapi.dev/api/quote/list?sortBy=change&sortOrder=asc&limit=100`);
    let data = await response.json();
    let filtered =  data.stocks.filter((obj)=>{return obj.volume > 500000})
    return filtered
}


