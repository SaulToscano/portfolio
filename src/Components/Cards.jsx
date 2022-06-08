
import '../css/cards.css'

function Cards({name, description, tecnologias, link, picture}){

    return(
        <div className='card_main_div'>
            <img src={picture} alt='imagen del proyecto'/>
            <div className='card_data_div'>
                <span className='title'>{name}</span>
                <span className='descripcion'>{description}</span>
                <span className='tecnologias'>{tecnologias}</span>
                <a href={link} target="_blank" rel="noreferrer" className='link'><span>Demostracion Aqui!</span></a>
            </div>
        </div>
    )
}

export default Cards;