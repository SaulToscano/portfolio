
import '../css/cards.css'

function Cards({name, description, link, picture}){

    return(
        <div className='card_main_div'>
            <img src={picture} alt="" />
            <div className='card_data_div'>
                <span>{name}</span>
                <span>{description}</span>
                <a href={link} target="_blank" rel="noreferrer"><span>Demostracion Aqui!</span></a>
            </div>
        </div>
    )
}

export default Cards;