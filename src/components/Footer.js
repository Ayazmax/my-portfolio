import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background: var(--bg-dark);
  color: white;
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`;

const FooterInfo = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const FooterName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FooterTagline = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
`;

const FooterSocial = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    order: 1;
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.3);

  &:hover {
    background: var(--primary-color);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.3);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const HeartIcon = styled(motion.div)`
  color: #ef4444;
  display: inline-flex;
  align-items: center;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Ayazmax', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:ayazm9582@gmail.com', label: 'Email' }
  ];

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterInfo
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FooterName>Mohomed Ayaz</FooterName>
            <FooterTagline>
              Software Engineer passionate about creating innovative solutions and 
              building exceptional user experiences.
            </FooterTagline>
          </FooterInfo>

          <FooterSocial
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <SocialLink
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </SocialLink>
            ))}
          </FooterSocial>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            <span>© {currentYear} Mohomed Ayaz. All rights reserved.</span>
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 