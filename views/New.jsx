const React = require("react")

// create the html for the page
// NOTE: action will be 
// With name attribute is has to match corresponding property

// styling
// adding styles directly to element, use double curly braces: style={{styleName}}
// make styling properties camel case


class New extends React.Component {
    render() {

        const myStyle = {
            color: '#00000',
            marginTop: '150px',
            textAlign: 'center',
            fontSize: '20px',
            // backgroundImage: 'url(https://cdn.domestika.org/c_fill,dpr_1.0,h_1200,t_base_params.format_jpg,w_1200/v1506425058/project-covers/000/356/667/356667-original.png?1506425058)'
           
           
        };
    
        return (

            <body style={{fontSize: 25 + 'px'}}>
                 <nav>
                        <a href="/pokemon" style={{color: 'red'}}>Home</a>
                    </nav>
                <div style={myStyle}>
                    
                    <br />
                    <h1>Create Your Own Pokemon</h1>
               
                    <form action="/pokemon" method="POST">
                        Name: <input type="text" name="name" /><br/>
                    <br />
                        Image: <input type="text" name="img" /><br/>
                    <br />
                    <input type="submit" name="" value="Create Pokemon"/><br/>
                    </form>
                </div>
            </body>
        )
    }
}

module.exports = New;