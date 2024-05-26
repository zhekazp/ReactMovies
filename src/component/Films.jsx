import { Film } from "./Film"
function Films(props) {
   const{
      films
   }=props.movies;
   return (
      <div className="movies">
           {
           films.length > 0 ? 
           films.map(movie => <Film key={Films.imdbID} film={movie} />):
           (<div>Not found</div>)
           }
      </div>
      );

}
export { Films }