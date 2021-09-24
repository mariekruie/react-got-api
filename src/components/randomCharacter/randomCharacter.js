import React, {Component} from 'react';
import './randomCharacter.css';
import GotService from '../../service/service';
import Spinner from '../spinner/spinner'
import Error from '../error';


export default class RandomCharacter extends Component {

    gotService = new GotService();

    state = {
        character: {},
        loading: true,
        errorMessage: null,
        error: false 
    }

    componentDidMount(){
        this.updateCharacter();
        this.timerId = setInterval(this.updateCharacter, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    updateCharacter = () =>{
        const id = Math.floor(Math.random()*140 +25);
        this.gotService.getCharacter(id)
            .then( character => {
                this.setState({
                    character,
                    loading:false
                })
            })
            .catch( err => {
                this.setState({
                    error: true,
                    errorMessage: err.message,
                    loading: false 
                })
            })
    }

    render() {

        const {character, loading, error, errorMessage} = this.state;

        const errorMsg = error ? <Error err={errorMessage}/> : null;
        const spinner = loading ? <LayoutSpinner/> : null;
        const content = !(loading || error) ? <Layout character={character}/> : null;

        return (
            <div className="random-block rounded">
                {errorMsg}
                {spinner}
                {content}
            </div>
        );
    }
}

const Layout = ({character}) => {

    const {name, gender, born, died, culture} = character;

    return(
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}

const LayoutSpinner = () => {

    return(
        <>
            <h4>Random Character: <Spinner/></h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span><Spinner/></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span><Spinner/></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span><Spinner/></span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span><Spinner/></span>
                </li>
            </ul>
        </>
    )
}