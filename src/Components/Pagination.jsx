function Pagination(props) {
  
  return (
      <div className="d-flex justify-content-center gap-2 mt-5">
        <button className="btn btn-warning" onClick={ ()=> props.prev(props.prev()) } type="button">Prev</button>
        <button className="btn btn-success" onClick={()=> props.next(props.next())} type="button">next</button>
      </div>
    );
}

export default Pagination;