const React = require("react");

class Show extends React.Component {
    render() {
        const { name, img} = this.props;
        return (
            <div>
              <h1>Gotta Catch 'Em All</h1>
              <nav>
              <a href="/pokemon">back</a>
              </nav>
              <h2>{name}</h2>
              <br />
            <img src= {`${img}.jpg`} alt={`Picture of ${name}`}/>
            

          
        </div>
        );
    }
}
module.exports = Show