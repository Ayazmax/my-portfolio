import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiSmartphone, FiZap,
  FiGitBranch, FiMonitor
} from 'react-icons/fi';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCategory = styled(motion.div)`
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillTag = styled(motion.span)`
  background: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProgressSection = styled.div`
  margin-top: 4rem;
`;

const ProgressTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Poppins', sans-serif;
`;

const ProgressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProgressItem = styled(motion.div)`
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProgressLabel = styled.span`
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const ProgressPercentage = styled.span`
  font-weight: 600;
  color: var(--primary-color);
  font-size: 1.1rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: var(--bg-primary);
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  border-radius: 4px;
`;

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FiMonitor />,
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'MS Office Package', 'Internet Skills']
    },
    {
      title: 'Backend Development',
      icon: <FiCode />,
      skills: ['Python', 'PHP', 'C#', 'Flask API', 'Firebase', 'MySQL']
    },
    {
      title: 'Mobile Development',
      icon: <FiSmartphone />,
      skills: ['Flutter', 'Android Studio', 'Mobile App Development', 'Image Detection', 'NLP']
    },
    {
      title: 'Specializations',
      icon: <FiDatabase />,
      skills: ['React Web Development', 'Flutter Mobile Apps', 'Modern UI/UX Design', 'Performance Optimization']
    },
    {
      title: 'Tools & Platforms',
      icon: <FiGitBranch />,
      skills: ['Git', 'Heroku', 'Xampp Server', 'Sublime Text', 'Computer Hardware']
    },
    {
      title: 'Other Skills',
      icon: <FiZap />,
      skills: ['Software Test Automation', 'Full-Stack Development', 'Role-based Authentication', 'Charts & Analytics']
    }
  ];

  const progressSkills = [
    { name: 'Flutter & Mobile Development', percentage: 90 },
    { name: 'React & JavaScript', percentage: 90 },
    { name: 'Firebase & MySQL', percentage: 85 },
    { name: 'PHP & C#', percentage: 70 }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SectionSubtitle>
            My technical skills and areas of expertise in software development
          </SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CategoryHeader>
                <CategoryIcon>
                  {category.icon}
                </CategoryIcon>
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <ProgressSection>
          <ProgressTitle>Skill Proficiency</ProgressTitle>
          <ProgressGrid>
            {progressSkills.map((skill, index) => (
              <ProgressItem
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProgressHeader>
                  <ProgressLabel>{skill.name}</ProgressLabel>
                  <ProgressPercentage>{skill.percentage}%</ProgressPercentage>
                </ProgressHeader>
                <ProgressBar>
                  <ProgressFill
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: (index * 0.1) + 0.5 }}
                  />
                </ProgressBar>
              </ProgressItem>
            ))}
          </ProgressGrid>
        </ProgressSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 