import React, {Component} from 'react';

class Meme extends Component {

    constructor() {
        super()
        this.state = {
            text:"",
            img:"",
            imgUrls:[]
        }

        this.printText = this.printText.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json()).then(res=>{
            const {memes} = res.data
            this.setState({
                imgUrls:memes
            })
        })

    }

    printText(event) {
        const value = event.target.value;
        this.setState({text:value})
    }

    

    render() {
        return (
            <div>
                <input
                    type="text" placeholder="Type anything..."
                    onChange={this.printText}
                    />
                    <button onClick={this.changeImg}>Click me !!!</button>
                    </div>
        )
    }

}
    
export default Meme

