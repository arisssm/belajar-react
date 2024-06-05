import React, {Component} from "react";

class Hitung extends Component{
    constructor(props){
        super(props);
            this.state = { count: 0, skor: 0};
    }

    tambah = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
            skor: (prevState.count + 1) * 100
        }));
    }

    render()
    {
        return(
            <div>
                <p>Jhon berlari sekitar {this.state.count} kali</p>
                <p>Skor yang di dapat jhon adalah {this.state.skor}</p>
                <button onClick={this.tambah}>
                    Hitung skor
                </button>
            </div>
        )
    }
}

export default Hitung;