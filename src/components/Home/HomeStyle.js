import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Container = styled.div`
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    overflow-y: scroll;

    :before{
        content: '';
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
    }

    @media screen and (max-width: 806px) {
        margin: -50px 0 0 -50px;
    }
`

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index:1;
`

export const PhotoBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Wrapper = styled.div`
    display: grid;
    z-index: 3;
    height: 80vh;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 806px){
        grid-template-areas:'col2';
    }
`

export const Column1 = styled.div`
    padding: 0;
    grid-area: col1;
    z-index: 2;
`

export const Column2 = styled.div`
    margin-left: 35px;
    padding: 0;
    grid-area: col2;
    display: inline-block !important;
    z-index: 2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    margin-left:20px;
    @media screen and (max-width: 450px){
        margin-left: 10px;
        margin-top:-300px;
    }
`

export const Heading = styled.h1`
    margin-bottom: 45px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: #FF8E00;
    font-family: 'Lato', sans-serif;

    @media screen and (max-width: 480px){
        font-size:32px;
    }
    
    @media screen and (max-width: 1100px){
        font-size:25px;
        margin-bottom: 25px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 55px;
    font-size: 18px;
    line-height: 25px;
    font-family: 'Lato', sans-serif;
    color: #003366;
    font-weight: bold;

    @media screen and (max-width: 1100px){
        font-size:16px;
        margin-bottom: 35px;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const Btn = styled(Link)`
    border-radius: 10px;
    background: #FF8E00;
    color: #FFFFFF;
    white-space: nowrap;
    padding: 9px 16px;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

&:hover{
    background: #003366;
}
`

export const ImgWrap = styled.div`
    max-width: 699px;
    
    @media screen and (max-width: 806px){
        display:none;
    }
`

export const Img = styled.img`
    width: 90%;
    margin-bottom: 0;
`