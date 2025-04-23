export  function Card(props){
    return (
        <div className="card">
            <h2>ID CARD</h2>
            <p>Name:{props.name}</p>
            <p>Roll:{props.roll}</p>
            <p>Address:{props.address}</p>
        </div>
    );
  }