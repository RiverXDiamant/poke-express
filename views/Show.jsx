const React = require("react");

class Show extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <div>
              <h1>Gotta Catch 'Em All</h1>
              <a href="/pokemon">back</a>
              <h2>{pokemon.name}</h2>
              <br />
            <img src= {pokemon.img} alt="image of pokemon" />

          
        </div>
        );
    }
}
module.exports = Show