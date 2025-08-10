import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiAward, FiUsers, FiCode } from 'react-icons/fi';

const AboutSection = styled.section`
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
    margin-bottom: 2.5rem;
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
    margin-bottom: 0.75rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: stretch;
  min-height: 600px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const AboutText = styled(motion.div)`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const AboutDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 1.25rem;
    line-height: 1.6;
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-card);
  border-radius: 12px;
  border: 1px solid var(--border-color);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DownloadButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
    width: 100%;
    justify-content: center;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 600px;

  @media (max-width: 768px) {
    order: 1;
    min-height: 400px;
  }

  @media (max-width: 480px) {
    min-height: 350px;
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));

  @media (max-width: 480px) {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
  }
`;

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            Get to know me better and understand my journey in software development
          </SectionSubtitle>
        </SectionHeader>

        <AboutContent>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AboutTitle>Dedicated Software Engineer</AboutTitle>
            <AboutDescription>
              I'm a diligent individual capable of working autonomously and efficiently managing tasks. 
              Skilled in adapting to diverse work environments and handling multiple responsibilities simultaneously. 
              Enthusiastic about taking on new challenges and thriving in various situations.
            </AboutDescription>
            <AboutDescription>
              With a BSc in Software Engineering from Kingston University and experience in full-stack development, 
              mobile applications, and modern web technologies, I specialize in creating innovative solutions that make a real impact.
            </AboutDescription>
            <AboutDescription>
              I am particularly specialized in creating React web applications and Flutter mobile applications, 
              delivering high-quality, responsive, and user-friendly solutions across multiple platforms.
            </AboutDescription>

            <AboutStats>
                              <StatItem
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>
                    <FiCode />
                  </StatIcon>
                  <StatNumber>20+</StatNumber>
                  <StatLabel>Projects Completed</StatLabel>
                </StatItem>

                <StatItem
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>
                    <FiUsers />
                  </StatIcon>
                  <StatNumber>2+</StatNumber>
                  <StatLabel>Years Experience</StatLabel>
                </StatItem>

                <StatItem
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>
                    <FiAward />
                  </StatIcon>
                  <StatNumber>4</StatNumber>
                  <StatLabel>Academic Degrees</StatLabel>
                </StatItem>

                <StatItem
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>
                    <FiCode />
                  </StatIcon>
                  <StatNumber>12+</StatNumber>
                  <StatLabel>Technologies</StatLabel>
                </StatItem>
            </AboutStats>

            <DownloadButton
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/cv/Mohomed-Ayaz-CV.pdf';
                link.download = 'Mohomed-Ayaz-CV.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FiDownload />
              Download Resume
            </DownloadButton>
          </AboutText>

          <AboutImage
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageContainer
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
              }}
            >
              <ProfileImage 
                src="/assets/mohomed-ayaz-profile.png" 
                alt="Mohomed Ayaz - Software Engineer"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none', 
                color: 'white', 
                fontSize: '1.2rem', 
                fontWeight: 600, 
                textAlign: 'center', 
                fontFamily: 'Poppins, sans-serif',
                position: 'absolute',
                zIndex: 2
              }}>
                Profile Photo<br />
                Coming Soon
              </div>
            </ImageContainer>
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 