const React = require("react")

class Show extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <h1>Show Page</h1>
        );
    }
}
module.exports = Show