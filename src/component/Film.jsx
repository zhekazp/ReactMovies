function Film(props){
    const {
        Title,
        Year,
        Type,
        Poster

    }=props.film;
    return  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={Poster}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{Title}</span>
      <span className="left info">{Year}</span>
      <span className="right info">{Type}</span>
    </div>
  </div>
}
export {Film}