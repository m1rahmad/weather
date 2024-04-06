import Card from "./Card";

function Daily({data}) {
  console.log(data);
  return (
    <div className="daily container">
        {
          data.slice(0,7).map((day)=>(
            <Card key={data.dt} data={day} />
          ))
        }
    </div>
  )
}

export default Daily