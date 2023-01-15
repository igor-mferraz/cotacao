import './styles.css'
import {Link} from 'react-router-dom'
export const CardStocks = ({stock, price, name, variation,logo}) =>{
    
    return(   
        <div className='containerContainerCard'>
        <img src={logo}/>
        <div className='containerCardStocks'>
            <div className='cardTop'>
                <Link className='stocks' to={`/${stock}`}>
                    {stock}
                </Link>
                <p className='price'>R$ {price} </p>
            </div>


            <div className='cardBottom'>
                <p className='nameCompany'>
                    {name}
                </p>
                <p className='variation'>
                    {variation} %
                </p>
            </div>
            
        </div>
        </div>
        
    )
}