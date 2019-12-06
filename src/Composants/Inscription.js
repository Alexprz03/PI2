import React, {Component} from 'react';

export default class Inscription extends Component {

    state = {
        nom :'',
        prenom : '',
        statut : '',
        items : []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            nom : '',
            prenom : '',
            statut : '',
            items:[...this.state.items, {nom:this.state.nom, prenom:this.state.prenom, statut:this.state.statut}]
        });
    }

    renderCard = () => {
        return this.state.items.map((item, index) => {
            return(
                <div className="card" key = {index}>
                    <div className="card-body">
                        <h3>Utilisateur</h3>
                        <hr />
                            <p> Prenom : {item.prenom}</p>
                            <p> Nom : {item.nom}</p>
                            <p> Statut : {item.statut}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                <div className="card my-3">
                    <div className="card-header"> S'inscrire</div>
                    <div className="card-body">

                            <form onSubmit = {this.onSubmit}>


                                <div className="form-group">
                                    <label htmlFor="nom">Nom</label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        name="nom"
                                        onChange={this.onChange}
                                        value={this.state.nom}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="prenom">Prenom</label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        name="prenom"
                                        onChange={this.onChange}
                                        value={this.state.prenom}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="statut">Statut</label>
                                    <input type="text"
                                        className="form-control form-control-lg"
                                        name="statut"
                                        onChange={this.onChange}
                                        value={this.state.statut}
                                    />
                                </div>

                                <button className="btn btn-primary btn-block"> Entrer!</button>
                                
                            </form>

                        </div>
                </div>
                {this.renderCard()}
            </div>
        )
    }
}