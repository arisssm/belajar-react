import { Component } from "react";

class Hiburan extends Component
{
    render()
    {
        return <p>Saya sedang berlibur ke {this.props.tempat} selama {this.props.jam} jam</p>
    }
}

export default Hiburan;