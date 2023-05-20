import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'typeface-lato';
import { Container, HomeBg, PhotoBg, Wrapper, Row, Column1, TextWrapper, Heading, 
    Subtitle, BtnWrap, Btn, Column2, ImgWrap, Img } from './HomeStyle'
import BussinesPart from './BussinesPart'
import Photo from './HomeBg.jpg'
import home_illustration from './Home_Illustration.png'

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
        <Container>
            
            <HomeBg>
                <PhotoBg src={Photo} />
            </HomeBg>

            <Wrapper> 
            <Row>
                <Column1>
                <TextWrapper>
                    <Heading>SMART BUSINESS MAKES <br/> FOR A SUCCESSFUL <BussinesPart/> </Heading>
                    <Subtitle>THE LEADING ALBANIAN B2B PROVIDER <br/> OF COMMUNICATION & CLOUD 
                    <br/>COMPUTING SERVICES </Subtitle>
                    
                    <BtnWrap>
                        <Btn onClick={() => navigate('')}>Get in touch</Btn>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                
                <Column2>
                <ImgWrap>
                    <Img src={home_illustration} alt='Illustration Photo' />
                </ImgWrap>
                </Column2>

            </Row>
            </Wrapper> 
        </Container>
        </>
  )
}

export default HomePage