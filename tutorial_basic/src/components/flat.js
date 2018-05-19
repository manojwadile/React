import React from 'react'
import '../branding/style/bootstrap.css'

class Flat extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flats:[]
        }
    }

    componentDidMount(){
        const flatsUrl="https://raw.githubusercontent.com/manojwadile/Json/b61afea928b27caececa295f61277c1b30f3134b/flats.json";
        fetch(flatsUrl)
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                flats:data
            })
        })
    }
    render(){
        return(
            <div className="row">
                {
                    this.state.flats.map((flat)=>{
                        return <div key={flat.id} className="col-md-4">{flat.id}</div>
                    })
                }
            </div>
        )
    }
}

export default Flat;