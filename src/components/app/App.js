import React, {Component} from 'react';

import Header from '../header';
import RandomCharacter from '../randomCharacter';
import Error from '../error';

import {CharacterPage, BookPage,HousePage, BookItem} from '../pages';

import {Button, Container} from 'reactstrap';
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`

export default class App extends Component {

  state={
    isToggleOn:false,
    error: false
  }

  componentDidCatch(){
    this.setState({
      error: true
    })
  }

  toggleRandomCharacter = () => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  
  render(){

    const {isToggleOn, error} = this.state;

    const toggleRandom = isToggleOn ? null : <RandomCharacter/>;

    if(error){
      return <Error/>
    }

    return (
      <Router>
        <Container>
          <Header/>
          {toggleRandom}
          <ButtonWrapper>
              <Button color="secondary" onClick={this.toggleRandomCharacter}>Убрать рандомный блок</Button>{' '}
          </ButtonWrapper>

          <Route path='/characters' exact component={CharacterPage}/>
          <Route path='/houses' exact component={HousePage}/>
          <Route path='/books' exact component={BookPage}/>
          <Route path='/books/:id' render={
            ({match}) => {
              const {id} = match.params;
             return <BookItem bookId={id}/>}
            }/>
        
        </Container>
      </Router>
    );
  }
}
