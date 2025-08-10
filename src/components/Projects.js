import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiCode, FiSmartphone, FiMonitor, FiChevronLeft, FiChevronRight, FiX, FiImage } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import LazyImage from './LazyImage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: var(--bg-primary);
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  border: 2px solid var(--border-color);
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
  }
`;

const ProjectGallery = styled.div`
  height: 250px;
  position: relative;
  overflow: hidden;
  background: var(--bg-primary);
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-color);
    background: rgba(255, 255, 255, 0.9);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    backdrop-filter: blur(10px);
    
    &::after {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .swiper-pagination-bullet {
    background: var(--primary-color);
    opacity: 0.5;
    
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  flex: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: auto;
`;

const ProjectLink = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
  background: ${props => props.variant === 'secondary' ? 'transparent' : 'var(--primary-color)'};
  color: ${props => props.variant === 'secondary' ? 'var(--text-primary)' : 'white'};
  border-color: ${props => props.variant === 'secondary' ? 'var(--border-color)' : 'var(--primary-color)'};
  cursor: pointer;

  &:hover {
    background: ${props => props.variant === 'secondary' ? 'var(--bg-secondary)' : 'var(--primary-dark)'};
    transform: translateY(-2px);
  }
`;

// Modal Styles
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: var(--bg-card);
  border-radius: 16px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border-color);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  font-family: 'Poppins', sans-serif;
`;

const CloseButton = styled(motion.button)`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }
`;

const ModalGallery = styled.div`
  height: 70vh;
  position: relative;
`;

const ModalSwiper = styled(Swiper)`
  height: 100%;
  
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-primary);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-color);
    background: rgba(255, 255, 255, 0.9);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    backdrop-filter: blur(10px);
    
    &::after {
      font-size: 20px;
      font-weight: bold;
    }
  }

  .swiper-pagination-bullet {
    background: var(--primary-color);
    opacity: 0.5;
    
    &.swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects', icon: <FiCode /> },
    { id: 'web', label: 'Web Apps', icon: <FiMonitor /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiSmartphone /> },
    { id: 'fullstack', label: 'Full Stack', icon: <FiCode /> }
  ];

  const projects = [
    {
      id: 1,
      title: 'Milk Supply Prediction System',
      description: 'A web application to predict milk supply and consumption with decision-making capabilities. Features charts and tables showing monthly predictions.',
      category: 'web',
      technologies: ['React', 'Python', 'Firebase', 'Flask API'],
      github: 'https://github.com/Ayazmax/milk-supply-and-consumption-prediction',
      images: [
        '/assets/milk supply/h1.png',
        '/assets/milk supply/h2.png',
        '/assets/milk supply/dashboard.png',
        '/assets/milk supply/news.png',
        '/assets/milk supply/stratergies.png'
      ]
    },
    {
      id: 2,
      title: 'Food Order Website',
      description: 'A complete food ordering website with role-based authentication for customers and sellers. Features order management and payment processing.',
      category: 'fullstack',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Xampp'],
      github: 'https://github.com/Ayazmax/Online-Food-Order',
      images: [
        '/assets/online food order/home.png',
        '/assets/online food order/h2.png',
        '/assets/online food order/m1.png',
        '/assets/online food order/m2.png',
        '/assets/online food order/m3.png',
        '/assets/online food order/m5.png',
        '/assets/online food order/cart.png',
        '/assets/online food order/contact.png',
        '/assets/online food order/online pay.png'
      ]
    },
    {
      id: 3,
      title: 'Child Education Web App',
      description: 'A web application developed for children to improve their early childhood education with interactive learning features.',
      category: 'web',
      technologies: ['React', 'Python', 'Firebase', 'Flask API'],
      github: 'https://github.com/Ayazmax/Kids-web',
      images: [
        '/assets/kids web/home.png',
        '/assets/kids web/login.png',
        '/assets/kids web/stories.png',
        '/assets/kids web/activities.png',
        '/assets/kids web/sing rhymes.png',
        '/assets/kids web/draw.png',
        '/assets/kids web/colring.png',
        '/assets/kids web/profile stats.png',
        '/assets/kids web/profile stats 2.png',
        '/assets/kids web/engagement.png'
      ]
    },
    {
      id: 4,
      title: 'Driver Emergency App (Flutter)',
      description: 'A comprehensive mobile application for driver safety featuring road sign detection, face movement detection, car accident detection, and flood detection within 5km radius.',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'TensorFlow Lite', 'Computer Vision', 'GPS', 'Sensors'],
      github: 'https://github.com/Ayazmax/driver_emergency_app',
      images: [
        '/assets/driving_emergency_mobile_app/welcome_page.jpg',
        '/assets/driving_emergency_mobile_app/Login_Page.jpg',
        '/assets/driving_emergency_mobile_app/register_page.jpg',
        '/assets/driving_emergency_mobile_app/home_page.jpg',
        '/assets/driving_emergency_mobile_app/drive_now.jpg',
        '/assets/driving_emergency_mobile_app/places_page.jpg',
        '/assets/driving_emergency_mobile_app/profile_page.jpg',
        '/assets/driving_emergency_mobile_app/alert_page.jpg'
      ]
    },
    {
      id: 5,
      title: 'EntreFusion - Entrepreneurial Ecosystem Platform',
      description: 'A comprehensive web-based platform designed to foster collaboration and growth within the entrepreneurial ecosystem. Built with Angular 14 and integrated with a MySQL backend, serving as a digital hub connecting entrepreneurs, investors, partners, and advisors.',
      category: 'web',
      technologies: ['Angular 14', 'TypeScript', 'MySQL', 'Node.js', 'Express', 'Bootstrap'],
      github: 'https://github.com/Ayazmax/EntreFusion---Entrepreneurial-Ecosystem-Platform',
      images: [
        '/assets/EntreFusion/h1.png',
        '/assets/EntreFusion/h2.png',
        '/assets/EntreFusion/h3.png',
        '/assets/EntreFusion/h4.png',
        '/assets/EntreFusion/h5.png',
        '/assets/EntreFusion/log.png'
      ]
    },
    {
      id: 6,
      title: '360° Gift House POS System',
      description: 'A comprehensive Point of Sale and Inventory Management System built for a retail store in Sri Lanka. Features include real-time sales processing, inventory tracking, customer management, and detailed analytics reporting. The system supports role-based access control, multi-payment methods, and automated stock alerts.',
      category: 'fullstack',
      technologies: ['Java 17', 'Java Swing', 'FlatLaf UI', 'SQLite', 'JDBC', 'Maven', 'MVC Pattern'],
      github: 'https://github.com/Ayazmax/360-POS',
      images: [
        '/assets/360 POS/h1.png',
        '/assets/360 POS/h2.png',
        '/assets/360 POS/p1.png',
        '/assets/360 POS/v1.png',
        '/assets/360 POS/e1.png',
        '/assets/360 POS/r1.png',
        '/assets/360 POS/sales report.png'
      ]
    },
    {
      id: 7,
      title: 'Educational Books Library & Quiz Application',
      description: 'A comprehensive Flutter-based educational application that combines digital textbook management with interactive quiz functionality. Features include digital library management with book catalog system, chapter-based reading, bookmarking, search & filter, admin dashboard, interactive quiz system with real-time assessment, progress tracking, user authentication with role-based permissions, and modern UI/UX design with dark/light theme support.',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'Go Router', 'SQLite', 'RESTful API', 'Material Design'],
      github: 'https://github.com/Ayazmax/Books-library',
      images: [
        '/assets/book library/01.jpg',
        '/assets/book library/02.jpg',
        '/assets/book library/03.jpg',
        '/assets/book library/04.jpg',
        '/assets/book library/05.jpg',
        '/assets/book library/06.jpg',
        '/assets/book library/07.jpg'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openGallery = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Featured Projects</SectionTitle>
          <SectionSubtitle>
            Here are some of my recent projects that showcase my skills and expertise
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon} {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <ProjectGallery>
                  <StyledSwiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                  >
                    {project.images.map((image, imageIndex) => (
                      <SwiperSlide key={imageIndex}>
                        <LazyImage 
                          src={image} 
                          alt={`${project.title} - Screenshot ${imageIndex + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </StyledSwiper>
                </ProjectGallery>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTech>
                    {project.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                  <ProjectLinks>
                    <ProjectLink
                      variant="secondary"
                      onClick={() => openGallery(project)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiImage />
                      View Gallery
                    </ProjectLink>
                    <ProjectLink
                      as="a"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      View Code
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </Container>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalHeader>
                <ModalTitle>{selectedProject.title} - Gallery</ModalTitle>
                <CloseButton
                  onClick={closeGallery}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiX />
                </CloseButton>
              </ModalHeader>
              <ModalGallery>
                <ModalSwiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  spaceBetween={0}
                  slidesPerView={1}
                >
                  {selectedProject.images.map((image, imageIndex) => (
                    <SwiperSlide key={imageIndex}>
                      <LazyImage 
                        src={image} 
                        alt={`${selectedProject.title} - Screenshot ${imageIndex + 1}`}
                      />
                    </SwiperSlide>
                  ))}
                </ModalSwiper>
              </ModalGallery>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsSection>
  );
};

export default Projects; 