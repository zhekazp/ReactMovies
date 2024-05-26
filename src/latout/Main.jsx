import React from "react";
import { Films } from "../component/Films";
import { Search } from "../component/Search";
import { Preloader } from "../component/Preloader";
const API_KEY=process.env.REACT_APP_API_KEY;

class Main extends React.Component{
    state ={
        films:[],
        loading:true
    }
    getFilms=(str, filtr)=>{
        this.setState({loading:true});
        const fltr= filtr === 'All'? '' : `&type=${filtr}`;
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s='${str}${fltr}`)
        .then(result=>result.json())
        .then(result=>result.Response === 'True'?
            this.setState({films: result.Search, loading:false}):
            this.setState({films: [], loading:false})
    );   
        
          
    }
    componentDidMount(){
        this.getFilms('ring','All');
    }
    render(){
        return (
            <main className="container">
                <Search search={this.getFilms}/>           
                {
                this.state.loading ? <Preloader/>:
                <Films movies={this.state} />
                }
                
            </main>
        );
    }
}
export {Main}