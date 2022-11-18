const React = require("react")

// styling
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

 // ! Set up your index view to show your pokemon data
// Continue working on your Index.jsx view so that you can see:
//  a. The name of each pokemon, as a list item, inside an unordered list
//  b. This list should be dynamically rendered by jsx based on your data from your 'database'
//  c. Manipulate the data to capitalize the first letter of their names


class Index extends React.Component {
   render() {
    const { pokemon } = this.props
    return (
        <div>
            <h1 style={myStyle}>See All the Pokemon!</h1>
           

            <ul>
                {
                    pokemon.map((poke, idx) => {
                        return (
                           <li>
                            
                            The name of this Pokemon is {' '} <a href={`/pokemon/${idx}`}>{poke.name} </a>.
                            
                           </li> 
                        )
                    })
                }
            </ul>
        </div>
    )

   }
}

module.exports = Index