const React = require("react")

// create the html for the page
// NOTE: action will be 
// With name attribute is has to match corresponding property


class New extends React.Component {
    render() {
        const { name, img } = this.props;
        return (
            <div>
                <h1>Create Your Own Pokemon</h1>
                <nav>
                    <a href="/pokemon">Home Page</a>
                </nav>
                <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Img: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
                </form>
            </div>
        )
    }
}

module.exports = New;