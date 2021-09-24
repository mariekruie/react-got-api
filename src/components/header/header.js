import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 80px;
background-color: ${ props => props.colored ? 'black' : 'green'};
`

const HeaderBlock = styled.div`
`
const HeaderTitle = styled.h3`
font-size: 24px;
color: #fff;
margin: 0;
:hover{
    color: #ddd;
}
`
const HeaderLinks = styled.ul`
display: flex;
margin:0;
align-items: center;
color: #fff;
list-style-type: none;
li{
    margin-right: 20px;
    font-size:18px;
    :hover{
        color: #ddd;
    }
}
`


const Header = () => {
    return (
        <HeaderWrapper colored>
            <HeaderBlock> 
                <HeaderTitle>
                    <Link to='/'>GameOfThrones DB</Link>
                </HeaderTitle>
            </HeaderBlock>
            <HeaderBlock>
                <HeaderLinks>
                    <li>
                        <Link to='/characters/'>Characters</Link>
                    </li>
                    <li>
                        <Link to='/houses/'>Houses</Link>
                    </li>
                    <li>
                        <Link to='/books/'>Books</Link>   
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        </HeaderWrapper>
    );
};

export default Header;