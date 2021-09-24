import React, {Component} from 'react';
import Spinner from '../spinner';

import './itemList.css';


export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount(){
        const {getData} = this.props;   
        getData()
            .then( itemList =>{
                this.setState({
                    itemList,
                })
            })
    }

    renderItems(arr){
        const{onItemSelected, renderItem} = this.props;
        return  arr.map((item) => {
                const {id} = item;
                const label = renderItem(item);

                return(
                    <li key={id}
                        className="list-group-item"
                        onClick={() => onItemSelected(id)}>
                        {label}
                    </li>
                )
            })
    }

    render(){

        const {itemList} = this.state;

        if(!itemList){
            return(<Spinner/>)
        }

        const items = this.renderItems(itemList);

        return (
            <div className="wrapper">
                <h1> Item list</h1>
                <ul className="item-list list-group">
                    {items}
                </ul>
            </div>
        );
    }
}