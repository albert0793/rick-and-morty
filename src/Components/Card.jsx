function Card({image, title, status, specie}) {
  return (
    <>
      <div className="card my-2 " style={{minWidth: '350px'}}>
        <div className="card-body">
          <h3 className="text-center">{ title }</h3>
          <hr />
          <div className="w-100"><img className="img-fluid" src={image} alt={title} /></div>
        </div>
        <div className="card-footer">
          <span><span className={`type title ${specie === "Alien" ? 'bg-warning' : 'bg-success'} mt-2` }>Species</span>{ specie } </span>
          <hr />
          <span><span className="type title">Status</span> { status } </span>
        </div>
      </div>
    </>
    );
}

export default Card;