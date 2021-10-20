import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux';

const Header = () => {
    const cars=useSelector(selectCars);
    const [burgerStatus,setBurgerStatus] = useState(false);

    return (
        <Container>
            <a ><img src="/images/logo.svg" alt="logo" /></a>
            <Menu>
                {
                    cars && cars.map((car,index)=>
                        <a href='#' key={index}>{car}</a>
                    )
                }
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {
                    cars && cars.map((car,index)=>
                    <li key={index}><a href='#'>{car}</a></li>
                    )
                }
                <li><a href="#" >Existing Inventory</a></li>
                <li><a href="#" >Used Inventory</a></li>
                <li><a href="#" >Trade-in</a></li>
                <li><a href="#" >Cybertruck</a></li>
                <li><a href="#" >Roadaster</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container=styled.div`
    min-height:60px;
    width:100vw;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:fixed;
    padding:0 20px;
    z-index:1;
`

const Menu=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex:1;

    a{
        font-weight:600;
        margin:10px;
        text-transform:uppercase;
        flex-wrap:nowrap;
    }

    @media(max-width:768px){
        display:none;
    }
`

const RightMenu=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    a{
        font-size: 20px;     
        margin:10px;
        font-family: 'Times New Roman', Times, serif;
        flex-wrap:nowrap;
    }
`

const CustomMenu=styled(MenuIcon)`
    cursor:pointer;
    margin-right:20px;

`

const BurgerNav=styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    width:300px;
    background:#fff;
    list-style:none;
    padding:20px;
    transform:${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
    }
`
const CloseWrapper=styled.div`
    text-align:end;
`

const CustomClose=styled(CloseIcon)`
    cursor:pointer;
`