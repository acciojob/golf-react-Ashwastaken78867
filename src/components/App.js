import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderBall: false,
            ballPosition: { left: "0px" } // Initial position
        };
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    // Function to start the game and render the ball
    buttonClickHandler() {
        this.setState({ renderBall: true });
    }

    // Function to move the ball when the Right Arrow key is pressed
    handleKeyPress(event) {
        if (event.key === "ArrowRight" || event.keyCode === 39) {
            this.setState(prevState => ({
                ballPosition: {
                    left: `${parseInt(prevState.ballPosition.left) + 5}px`
                }
            }));
        }
    }

    // Add event listener when the component mounts
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    // Remove event listener when the component unmounts (best practice)
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    // Render ball or button based on state
    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div className="ball" style={this.state.ballPosition}></div>;
        } else {
            return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
        }
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
