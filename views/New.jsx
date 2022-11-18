const React = require("react")

// create the html for the page
// NOTE: action will be 
// With name attribute is has to match corresponding property


class New extends React.Component {
    render() {
    
        return (
            <div>
                 <nav>
                    <a href="/pokemon">Home</a>
                </nav>
                <br />
                <h1>Create Your Own Pokemon</h1>
               
                <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Img: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="Create Pokemon"/><br/>
                </form>
            </div>
        )
    }
}

module.exports = New;