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
        this.changeImg = this.changeImg.bind(this);
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

    changeImg() {
        const randNum = Math.floor(Math.random()
         * this.state.imgUrls.length);
        const randImg = this.state.imgUrls[randNum].url
        this.setState({img : randImg})
    }

    render() {

        const styleImg = {
            height: "200px",
            width: "200px"
        }

        return (
            <div>
                <input
                    type="text" placeholder="Type anything..."
                    onChange={this.printText}
                    />
                    <button onClick={this.changeImg}>Click me !!!</button>
                    <div>
                        <img src={this.state.img} style={styleImg}/>
                        <h2>{this.state.text}</h2>
                     </div>
                    </div>
        )
    }

}
    
export default Meme

