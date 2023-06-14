import React, { Component } from "react-dom";
import { h } from "preact";

interface Props {
    name: string;
    img: string;
}

interface State {
    name: string;
    img: string;
}

class AnimatedImage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: props.name,
            img: props.img
        };
    }

    render() {
        return <div id={`${this.state.name}Container`}>
            <img src={`/static/images/${this.state.img}`} id={this.state.name} alt={this.state.name} />
        </div>;
    }
}

export default AnimatedImage;