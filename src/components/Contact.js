import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: 6rem 0;
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ContactInfo = styled(motion.div)`
  width: 100%;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ContactDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactItems = styled.div`
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--primary-color);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    gap: 0.75rem;
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;

  &.clickable {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ContactButtonContainer = styled.div`
  text-align: center;
  margin: 3rem 0;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 2.5rem 0;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    margin: 2rem 0;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: white;
  border: none;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 25px rgba(147, 51, 234, 0.3);
  font-family: 'Poppins', sans-serif;
  min-width: 180px;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(147, 51, 234, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 1.125rem 2.25rem;
    font-size: 1rem;
    min-width: 160px;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 280px;
    min-width: auto;
  }
`;

const MessageButton = styled(motion.button)`
  background: linear-gradient(135deg, #4285f4, #34a853);
  color: white;
  border: none;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 25px rgba(66, 133, 244, 0.3);
  font-family: 'Poppins', sans-serif;
  min-width: 180px;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(66, 133, 244, 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 1.125rem 2.25rem;
    font-size: 1rem;
    min-width: 160px;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.95rem;
    width: 100%;
    max-width: 280px;
    min-width: auto;
  }
`;

const SocialLinks = styled(motion.div)`
  margin-top: 3rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--border-color);

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    padding-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    padding-top: 1.5rem;
  }
`;

const SocialTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const SocialIcon = styled(motion.a)`
  width: 55px;
  height: 55px;
  border-radius: 12px;
  background: var(--bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 1.3rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    border-color: var(--primary-color);
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;



const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleContactClick = () => {
    window.location.href = 'tel:+94714573090';
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'ayazm9582@gmail.com',
      link: 'mailto:ayazm9582@gmail.com'
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+94 714573090',
      link: 'tel:+94714573090'
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      link: null
    }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ayazm9582' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/ayazm9582' },
    { icon: <FiFacebook />, url: 'https://facebook.com/ayazm9582' }
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionSubtitle>
            Let's work together! Feel free to reach out for collaborations or just a friendly hello
          </SectionSubtitle>
        </SectionHeader>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ContactTitle>Let's Connect</ContactTitle>
            <ContactDescription>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </ContactDescription>

            <ContactItems>
              {contactInfo.map((item, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  onClick={item.link ? () => window.open(item.link, '_blank') : undefined}
                  style={{ cursor: item.link ? 'pointer' : 'default' }}
                >
                  <ContactIcon>{item.icon}</ContactIcon>
                  <ContactDetails>
                    <ContactLabel>{item.label}</ContactLabel>
                    <ContactValue className={item.link ? 'clickable' : ''}>
                      {item.value}
                    </ContactValue>
                  </ContactDetails>
                </ContactItem>
              ))}
            </ContactItems>

            <ContactButtonContainer>
              <ContactButton
                onClick={handleContactClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <FiPhone />
                Contact Me
              </ContactButton>
              <MessageButton
                onClick={() => window.open('mailto:ayazm9582@gmail.com', '_blank')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <FiMail />
                Message Me
              </MessageButton>
            </ContactButtonContainer>

            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <SocialTitle>Follow Me</SocialTitle>
              <SocialIcons>
                {socialLinks.map((social, index) => (
                  <SocialIcon
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </SocialIcon>
                ))}
              </SocialIcons>
            </SocialLinks>
          </ContactInfo>


        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact; 