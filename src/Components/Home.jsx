import Cards from './Cards.jsx'

import profile_pic from '../img/Portfolio_Main_Pic.jpg'
import weather_app from '../img/Weather_App.png'
import apiDogs_app from '../img/ApiDogs_App.png'
import miniecommerce_app from '../img/Mini-Ecommerce.png'
import carwash_app from '../img/Carwash_App.png'

import '../css/home.css'

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
                    <Cards name='Weather App' description='Una aplicacion que te da las tarjetas del clima de la ciudad que le solicites' link='https://SaulToscano.github.io/WeatherApp' picture={weather_app}/>
                    <Cards name='Api Dogs App' description='Una aplicacion que te da las tarjetas de razas de perros de una api' link='https://SaulToscano.github.io/apiDogs' picture={apiDogs_app}/>
                    <Cards name='Mini Ecommerce' description='Una aplicacion de un ecommerce pequeña' link='https://saultoscano.github.io/Mini-Ecommerce/' picture={miniecommerce_app}/>
                    <Cards name='Carwash App (A1SDetailing)' description='Una aplicacion para un cliente de lavado de carros' link='https://a1sdetailing.com/' picture={carwash_app}/>
                </div>

            </div>
        </div>
    )
}

export default Home;