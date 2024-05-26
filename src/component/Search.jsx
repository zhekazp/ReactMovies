import React from "react";
class Search extends React.Component {
    state = {
        search: 'ring',
        filtr: 'All'
    }
    getResult = (type) => {
        if (this.state.search !== '') {
            this.props.search(this.state.search, type);
        }
    }

    handleClick = () => {
        this.getResult(this.state.filtr);
    }
    handleRadio = (e) => {
        this.setState({ filtr: e.target.dataset.type });
        this.getResult(e.target.dataset.type);
    }
    render() {
        return <div className="row ">
            <div className="input-field col s12">
                <input
                    placeholder="Search"
                    type="text"
                    className="validate"
                    value={this.state.search}
                    onChange={(e)=> this.setState({search: e.target.value})}
                />
                <button onClick={this.handleClick} className="btn light-blue darken-1">Search</button>
            </div>

            <label className="radio">
                <input
                    className="with-gap light-blue darken-1"
                    name="group3"
                    type="radio"
                    data-type="All"
                    onChange={this.handleRadio}
                    checked={this.state.filtr === 'All'}
                />
                <span>All</span>
            </label>

            <label className="radio">
                <input
                    className="with-gap light-blue darken-1"
                    name="group3"
                    type="radio"
                    data-type="movie"
                    onChange={this.handleRadio}
                    checked={this.state.filtr === 'movie'}
                />
                <span>Films</span>
            </label>

            <label className="radio">
                <input
                    className="with-gap light-blue darken-1"
                    name="group3"
                    type="radio"
                    data-type="series"
                    onChange={this.handleRadio}
                    checked={this.state.filtr === 'series'}
                /><span>Serials</span>
            </label>
        </div>
    }
}
export { Search }