import React from 'react';
import { FooterContainer, FooterWrapper, FooterColumn, FooterTitle, FooterList,
         FooterLinkItem, StyledLink, IconWrapper, StyledLink2} from './footerStyle';
import { IconSection, Line, IconContainer, SocialIcon } from './IconStyle'
import { EndFooter, Column, Text, ImgColumn, Image, 
         Column1, StyledLink1, Pipe } from './EndFooterStyle';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTiktok, FaTwitter, 
         FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'
import logoFooter from './logoFooter.png'


const footerItems = [
  {
    title: 'ITIRANA',
    links: [
      { url: '/Company/Team', text: 'Why Us?' },
      { url: '/Company/Team', text: 'Company' },
      { url: '/Company/Team', text: 'Team' },
      { url: '/Company/Team', text: 'Standards' },
      { url: '/Company/Team', text: 'Blog' },
      { url: '/Company/Team', text: 'Brochure' }
    ],
  },
  {
    title: 'OUR SERVICES',
    links: [
      { url: '/Company/Team', text: 'Data Transmissions' },
      { url: '', text: 'Dedicated Internet Access' },
      { url: '', text: 'Managed Cloud' },
      { url: '', text: 'Co-Location' },
      { url: '', text: 'Managed & Proffesional' },
      { url: '', text: 'Virtual Desktop Infrastructure' },
      { url: '', text: 'Dark Fiber' },
      { url: '', text: 'Web Hosting' },
      { url: '', text: 'Archive & Drive & Solutions' }
    ],
  },
]


const socialIcons = [
  { icon: <AiFillInstagram size={39} />, href: '' },
  { icon: <FaFacebook />, href: '' },
  { icon: <FaTiktok />, href: '' },
  { icon: <FaLinkedinIn />, href: 'https://al.linkedin.com/company/itirana' },
  { icon: <FaTwitter />, href: '' },
  { icon: <SiGmail />, href: '' },
  { icon: <FaYoutube />, href: '' },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
      {footerItems.map((column, index) => (
        <FooterColumn key={index}>
          <FooterTitle>{column.title}</FooterTitle>
          <FooterList>
            {column.links.map((link, index) => (
              <FooterLinkItem key={index}>
                <StyledLink to={link.url}>{link.text}</StyledLink>
              </FooterLinkItem>
            ))}
          </FooterList>
        </FooterColumn>
      ))}
      
        <FooterColumn>
        <FooterTitle>CONTACT</FooterTitle>
        <FooterList>

          <FooterLinkItem>
            <IconWrapper><FaMapMarkerAlt size={24} /></IconWrapper>
            <div>
              <StyledLink2 to="https://goo.gl/maps/mfpiHcWbLEP9mmNo6" target='_blank'> ITirana sh.p.k, Str. "Perlat Rexhepi",<br/> Nd. 10, H. 11, Njësia Nr. 5, <br/> Postal Code 1019, Tirana, Albania</StyledLink2>
            </div>
          </FooterLinkItem>

          <FooterLinkItem>
            <IconWrapper><FaPhone size={24}/></IconWrapper>
            <div>
              <StyledLink2 to="tel:+35542274996">Phone: +35542274996</StyledLink2>
              <StyledLink2 to="tel:+355694055115">Mobile +35694055115</StyledLink2>
            </div>
          </FooterLinkItem>

          <FooterLinkItem>
            <IconWrapper><FaEnvelope size={24}/></IconWrapper>
            <div>
              <StyledLink2 to="mailto: info@itirana.com">info@itirana.com</StyledLink2>
              <StyledLink2 to="mailto: support@itirana.com">support@itirana.com</StyledLink2>
              <StyledLink2 to="mailto: sales@itirana.com">sales@itirana.com</StyledLink2>
              <StyledLink2 to="mailto: finance@itirana.com">finance@itirana.com</StyledLink2>
            </div>
          </FooterLinkItem>

        </FooterList>
      </FooterColumn>

    </FooterWrapper>

    <IconSection>
      <Line />
      <IconContainer>
        {socialIcons.map((socialIcon, index) => (
          <SocialIcon key={index} href={socialIcon.href} target="_blank">
            {socialIcon.icon}
          </SocialIcon>
        ))}
      </IconContainer>
      <Line />
    </IconSection>

    <EndFooter>
      <Column>
        <Text href="#">Copyright 2008 - 2023 @ ITIRANA</Text>
      </Column>
      
      <ImgColumn>
        <Image src={logoFooter} width={150} alt="ITirana Logo" />
      </ImgColumn>
      
      <Column1>
        <StyledLink1 to="/Company/Team">Privacy Policy</StyledLink1><Pipe>|</Pipe>
        <StyledLink1 to="/Company/Team">Terms of Services</StyledLink1>
      </Column1>
    </EndFooter>
  </FooterContainer>
  );
};

export default Footer;
