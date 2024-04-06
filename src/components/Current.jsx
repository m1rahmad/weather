import { useContext } from 'react'
import sun from '../images/sun.svg'
import humidity from '../images/humidity.svg'
import pressure from '../images/pressure.svg'
import temp from '../images/temp.svg'
import wind from '../images/wind.svg'
import { Context } from '../context/Context'
import { getTime } from '../helpers'

function Current({data}) {
    const {search} = useContext(Context)
    console.log(data);
  return (
    <div className="container current">
        <div className="current__left">
            <div className="current__left-top">
                <div className="current__degree">
                    <h2>{Math.round(data.temp)}°</h2>
                    <p>Сегодня</p>
                </div>
                <img src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='weather icon' className='current__image' />
            </div>
            <div className="current__left-bottom">
                <p className="current__left-text">Время: {getTime(data.dt)}</p>
                <p className="current__left-text">Город: {search}</p>
            </div>
        </div>
        <div className="current__right">
            <div className="current__right-box">
                <img src={temp} alt="Температура" className="current__right-icon" />
                <p className="current__right-text">Температура</p>
                <p className="current__right-info">{Math.round(data.temp)} - ощущается как 17°</p>
            </div>            
            <div className="current__right-box">
                <img src={pressure} alt="Давление" className="current__right-icon" />
                <p className="current__right-text">Давление</p>
                <p className="current__right-info">{Math.round(data.pressure)} мм ртутного столба</p>
            </div>            
            <div className="current__right-box">
                <img src={humidity} alt="Осадки" className="current__right-icon" />
                <p className="current__right-text">Осадки</p>
                <p className="current__right-info">{Math.round(data.humidity)} percent</p>
            </div>            
            <div className="current__right-box">
                <img src={wind} alt="Ветер" className="current__right-icon" />
                <p className="current__right-text">Ветер</p>
                <p className="current__right-info">{Math.round(data.wind_speed)} м/с юго-запад</p>
            </div>
        </div>
    </div>
  )
}

export default Current