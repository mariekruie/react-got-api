import React, {Component} from "react";
import GotService from '../../service/service';

import ItemList from "../itemList";
import Error from "../error";
import {withRouter} from 'react-router-dom';


class BookPage extends Component{

    gotService = new GotService();

    state={
        error: false
    }

    componentDidCatch(){
        this.setState({
          error: true
        })
    }


    render(){

        const{error}= this.state;
        
        if(error){
            return <Error/>
        }


        return(
            <ItemList 
                onItemSelected={(itemId) => {
                    this.props.history.push(itemId)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item)=> item.name}
            />
        )
    }
}

export default withRouter(BookPage);