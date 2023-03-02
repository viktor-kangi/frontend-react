import React, {Component} from 'react';

class Meme extends Component {

    constructor() {
        super()
        this.state = {
            text:"",
            img:"",
            imgUrls:[]
        }
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

    render() {
        return (
            <div>
                <input
                    type="text" placeholder="Type anything..."
                    onChange={this.printText}
                    />
                    </div>
        )
    }

}
    
export default Meme

