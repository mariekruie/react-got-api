import React, {Component} from "react";
import GotService from '../../service/service';

import RowBlock from "../rowBlock";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import Error from "../error";
import {Button} from 'reactstrap';


export default class CharacterPage extends Component{

    gotService = new GotService();

    state={
        selectedCharacter: null,
        error: false
    }

    componentDidCatch(){
        this.setState({
          error: true
        })
    }

    onCharSelected = (id) => {
        this.setState({
          selectedCharacter: id
        })
    }

    updateList = () => {
        const {getData} = this.props;   
        getData()
            .then( itemList =>{
                this.setState({
                    itemList,
                })
            })
    }

    render(){

        const{selectedCharacter, error}= this.state;
        
        if(error){
            return <Error/>
        }

        const characterList = (
            <ItemList 
                onItemSelected={this.onCharSelected}
                getData={this.gotService.getAllCharacters}
                renderItem={(item)=> `${item.name} (${item.gender})`}
            >
                <Button color="danger">Обновить список</Button>{' '}
            </ItemList>
        )

        const characterDetails = (
            <ItemDetails itemId={selectedCharacter} getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return(
            <RowBlock left={characterList} right={characterDetails}/>
        )
    }
}