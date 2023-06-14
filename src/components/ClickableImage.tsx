import React, { Component } from "react-dom";
import { h } from "preact";

interface Props {
    name: string;
    img: string;
    repl_name?: string;
    repl_img?: string;
}

interface State {
    name: string;
    img: string;
    repl_name?: string;
    repl_img?: string;
}

class ClickableImage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: props.name,
            img: props.img,
            repl_name: props.repl_name,
            repl_img: props.repl_img
        };
    }

    render() {
        let repl;
        if (this.state.repl_img && this.state.repl_name) {
            repl = <img src={`static/images/${this.state.repl_img}`} id={this.state.repl_name} alt={this.state.repl_name} />;
        }
        return <div id={`${this.state.name}-container`}>
            <input type="checkbox" id={`${this.state.name}-controls`} />
            <label htmlFor={`${this.state.name}-controls`}>
                <img src={`static/images/${this.state.img}`} id={this.state.name} alt={this.state.name} />
                {repl}
            </label>
        </div>
    }


}

export default ClickableImage;