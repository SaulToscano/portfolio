import Cards from './Cards.jsx'

import profile_pic from '../img/Portfolio_Main_Pic.jpg'
import weather_app from '../img/Weather_App.png'

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
                    <Cards name='Api Dogs App' description='Una aplicacion que te da las tarjetas de razas de perros de una api' link='https://SaulToscano.github.io/apiDogs' picture={weather_app}/>
                </div>

            </div>
        </div>
    )
}

export default Home;