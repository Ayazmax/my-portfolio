import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const ExperienceSection = styled.section`
  padding: 6rem 0;
  background: var(--bg-secondary);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-family: 'Poppins', sans-serif;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
      transform: none;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  width: 20px;
  height: 20px;
  background: var(--bg-card);
  border: 4px solid var(--primary-color);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(-50%);
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  position: relative;

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 60px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;

    @media (max-width: 768px) {
      left: -10px;
      border-right-color: white;
      border-left-color: transparent;
    }
  }

  ${TimelineItem}:nth-child(odd) & {
    margin-right: 55%;

    @media (max-width: 768px) {
      margin-right: 0;
    }

    &::before {
      right: -10px;
      border-left-color: white;
      border-right-color: transparent;

      @media (max-width: 768px) {
        right: auto;
        left: -10px;
        border-right-color: white;
        border-left-color: transparent;
      }
    }
  }

  ${TimelineItem}:nth-child(even) & {
    margin-left: 55%;

    @media (max-width: 768px) {
      margin-left: 60px;
    }

    &::before {
      left: -10px;
      border-right-color: white;
      border-left-color: transparent;

      @media (max-width: 768px) {
        left: -10px;
        border-right-color: white;
        border-left-color: transparent;
      }
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`;

const CompanyName = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  flex-wrap: wrap;
`;

const JobDetail = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const JobDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const JobTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
`;

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'SkyMax Solutions',
      location: 'Sri Lanka',
      period: '01/2025 - Present',
      description: 'Building full-stack web applications, mobile applications and windows applications. Working on diverse projects using modern technologies and best practices.',
      technologies: ['Flutter', 'React', 'Python', 'Firebase', 'C#', 'MySQL'],
      link: '#'
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'ICT Option',
      location: 'Sri Lanka',
      period: '05/2024 - 11/2024',
      description: 'Built React frontends and Flutter mobile applications. Worked on modern web and mobile development projects using cutting-edge technologies.',
      technologies: ['React', 'Flutter', 'JavaScript', 'Dart', 'TypeScript', 'CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Sri Lanka',
      period: '01/2023 - Present',
      description: 'Working independently on various projects including mobile apps, web applications, and AI/ML solutions. Managing client relationships and project delivery.',
      technologies: ['Flutter', 'React', 'Python', 'Firebase', 'PHP', 'MySQL'],
      link: '#'
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Work Experience</SectionTitle>
          <SectionSubtitle>
            My professional journey and career progression in software development
          </SectionSubtitle>
        </SectionHeader>

        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <TimelineDot />
              <TimelineContent
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <JobTitle>{experience.title}</JobTitle>
                <CompanyName>
                  <FiBriefcase />
                  {experience.company}
                  <motion.a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: 'inherit' }}
                  >
                    <FiExternalLink />
                  </motion.a>
                </CompanyName>
                <JobDetails>
                  <JobDetail>
                    <FiCalendar />
                    {experience.period}
                  </JobDetail>
                  <JobDetail>
                    <FiMapPin />
                    {experience.location}
                  </JobDetail>
                </JobDetails>
                <JobDescription>{experience.description}</JobDescription>
                <JobTechnologies>
                  {experience.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </JobTechnologies>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 