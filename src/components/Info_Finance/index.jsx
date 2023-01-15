import './styles.css'

export const InfoFinance = ({title,valor,logo}) =>{
    return(
        <div className="containerInfoFinance">
            <div className="InfoLogo">
                <img src={logo}  />
            </div>
            <div className="infoCompany">
                <p className='title'>{title}</p>
                <p className='valor'>{valor}</p>
            </div>
        </div>
        
    )
}