import { getDate, getDay } from "../helpers";

function Card({data}) {
  console.log(data);
  return (
    <div className="card">
      <h3 className="card__title">{getDay(data.dt)}</h3>
      <p className="card__date">{getDate(data.dt)}</p>
      <div className="card__image">
        <img src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description} />
      </div>
      <p className="card__max">{Math.round(data.temp.max)}°</p>
      <p className="card__max">{Math.round(data.temp.min)}°</p>
      <p className="card__state">{data.weather[0].min}</p>
    </div>
  )
}

export default Card