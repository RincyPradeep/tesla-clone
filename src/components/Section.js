import React from 'react'
import styled from 'styled-components'

const Section = ({title,description,backgroundImg,leftBtnText,rightBtnText}) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Button>
                <ButtonGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                   {rightBtnText && <RightButton>{rightBtnText}</RightButton> }
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg'>

                </DownArrow>
            </Button>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
    width:100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props=>`url("/images/${props.bgImage}")`}
`
const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`

const Button=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const ButtonGroup=styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`

const LeftButton=styled.div`
    background-color:#393c41;
    color:#fff;
    height:40px;
    width:256px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.8;
    text-transform:uppercase;
    font-size:12px;
    margin:10px;
    cursor:pointer;
`

const RightButton=styled(LeftButton)`
    color:#000;
    background-color:#fff;
    opacity:0.65;
`

const DownArrow=styled.img`
    height:40px;
    animation:animateDown infinite 1.5s;
`
