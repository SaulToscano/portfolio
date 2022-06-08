import Cards from './Cards.jsx'

import profile_pic from '../img/Portfolio_Main_Pic.jpg'
import weather_app from '../img/Weather_App.png'
import apiDogs_app from '../img/ApiDogs_App.png'
import miniecommerce_app from '../img/Mini-Ecommerce.png'
import carwash_app from '../img/Carwash_App.png'

import '../css/home.css'

import {weather, dogs, commerce, carwash} from './Data.jsx'

function Home(){

    return(
        <div>
            <div className="Descripcion_Div">
                <img src={profile_pic} alt=""/>
                <p></p>
            </div>

            <div>
                <span>JavaScript</span>
                <hr />
                <div className='Cards_Container'>
                    <Cards name={weather.name} description={weather.descripcion} tecnologias={weather.technology} link={weather.link} picture={weather_app}/>
                    <Cards name={dogs.name} description={dogs.descripcion} tecnologias={dogs.technology} link={dogs.link} picture={apiDogs_app}/>
                    <Cards name={commerce.name} description={commerce.descripcion} tecnologias={commerce.technology} link={commerce.link} picture={miniecommerce_app}/>
                    <Cards name={carwash.name} description={carwash.descripcion} tecnologias={carwash.technology} link={carwash.link} picture={carwash_app}/>
                </div>

            </div>
        </div>
    )
}

export default Home;