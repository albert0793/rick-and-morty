

function Pagination({prev, next, onPrev, onNext}) {
  
  return (
      <div className="d-flex justify-content-center gap-2 my-5">
      { prev ? 
        <button className="btn btn-warning" onClick={()=> onPrev() } type="button">Atrás</button>
        : null }
      { next ? 
        <button className="btn btn-success" onClick={()=> onNext() } type="button">Adelante</button>
        : null }
      </div>
    );
}

export default Pagination;