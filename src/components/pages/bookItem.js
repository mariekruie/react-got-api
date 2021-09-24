import React, {Component} from 'react';
import GotService from '../../service/service';

import ItemDetails, { Field } from "../itemDetails";

export default class BookItem extends Component{

    gotService = new GotService();


    render(){
        return (
            <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
                <Field field='authors' label='Authors'/>
                <Field field='country' label='Country'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}