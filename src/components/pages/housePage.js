import React, {Component} from "react";
import GotService from '../../service/service';

import RowBlock from "../rowBlock";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import Error from "../error";

export default class HousePage extends Component {
    
    gotService = new GotService();

    state={
        selectedHouse: null,
        error: false
    }

    componentDidCatch(){
        this.setState({
          error: true
        })
    }

    onHouseSelected = (id) => {
        this.setState({
          selectedHouse: id
        })
    }

    render(){
        const{selectedHouse, error}= this.state;
        
        if(error){
            return <Error/>
        }

        const houseList = (
            <ItemList 
                onItemSelected={this.onHouseSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item)=> item.name}
            />
        )

        const houseDetails = (
            <ItemDetails itemId={selectedHouse} getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='coatOfArms' label='Coat of arms'/>
                <Field field='founded' label='Founded'/>
                <Field field='founder' label='Founder'/>
            </ItemDetails>
        )

        return(
            <RowBlock left={houseList} right={houseDetails}/>
        )
    }
}