import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  overflow: hidden;
  padding-top: 70px;
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Shape = styled(motion.div)`
  position: absolute;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: white;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  opacity: 0.9;
  font-family: 'Inter', sans-serif;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.1;

  @media (max-width: 480px) {
    font-size: clamp(2rem, 10vw, 2.5rem);
    margin-bottom: 0.75rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.25rem, 4vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 480px) {
    font-size: clamp(1rem, 5vw, 1.25rem);
    margin-bottom: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 3rem;
  opacity: 0.8;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 3rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-lg);
  min-width: 160px;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
    min-width: 140px;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;

  &:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
    min-width: 140px;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.2);
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
    color: white;
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: white;
  opacity: 0.7;

  @media (max-width: 480px) {
    bottom: 1.5rem;
    gap: 0.25rem;
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const titles = ['Software Engineer', 'Full Stack Developer', 'Mobile App Developer', 'React & Flutter Specialist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroSection id="home">
      <BackgroundShapes>
        <Shape
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: 100,
            height: 100,
            top: '20%',
            left: '10%',
          }}
        />
        <Shape
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: 150,
            height: 150,
            top: '60%',
            right: '15%',
          }}
        />
        <Shape
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: 80,
            height: 80,
            top: '30%',
            right: '30%',
          }}
        />
      </BackgroundShapes>

      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm
        </Greeting>

        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mohomed Ayaz
        </Name>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titles[currentTextIndex]}
          </motion.span>
        </Title>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A diligent individual capable of working autonomously and efficiently managing tasks. 
          Skilled in adapting to diverse work environments and handling multiple responsibilities simultaneously.
        </Description>

        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </PrimaryButton>
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </SecondaryButton>
        </CTAButtons>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <SocialLink
            href="https://github.com/Ayazmax"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:ayazm9582@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiMail />
          </SocialLink>
        </SocialLinks>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={scrollToAbout}
        whileHover={{ y: 5 }}
      >
        <ScrollText>Scroll Down</ScrollText>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.div>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 