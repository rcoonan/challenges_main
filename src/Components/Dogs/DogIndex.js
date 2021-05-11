import React, { Component } from "react";
import Dogs from "./Dogs"

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ""
        }
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.url
                })
            })
            .catch(console.log)
        console.log(this.state.img);
    }

    render() {
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <Dogs url={this.state.img} />
            </div>
        )
    }
}

export default DogIndex;
