const React = require("react");

class Show extends React.Component {
    render() {
        const { name, image} = this.props.pokemon;
        return (
            <div>
              <h1>Gotta Catch 'Em All</h1>
              <nav>
              <a href="/pokemon">back</a>
              </nav>
              <h2>{name}</h2>
              <br />
            <img src= {`${image}`} alt={`Picture of ${name}`}/>
            

          
        </div>
        );
    }
}
module.exports = Show