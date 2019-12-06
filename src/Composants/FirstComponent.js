import React, { Component } from 'react';

class FirstComponent extends Component {

    constructor(){
        super();
        this.state = { 
            musique : 'Ecouter la musique'
        }
    }

    lecture = () => {
        this.setState({
            musique : 'Arreter la musique' 
        });
    }

    pause = () => { 
        this.setState({
            musique : 'Ecouter la musique' 
        });
    }

    render(){
        return(
            <React.Fragment>
                <p> Ma plateforme de streaming musical en p2p ! ;) </p>
                <br/>
                <button onDoubleClick = {this.lecture} onClick = {this.pause} > <h1> {this.state.musique} </h1> </button>
                <br/><br/>
                <p>Que souhaites-tu écouter ? </p>
                <input type ="text"/>
                 <button>  Entrer </button>
                 <br/><br/> 
                {this.props.names.map((pres)  =>
                <p key = {pres.id}> {pres.name} {pres.firstname} </p> 
                )}
            </React.Fragment>
        )
    }
}
 
export default FirstComponent;