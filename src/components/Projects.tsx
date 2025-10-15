import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import "swiper/css";
import "swiper/css/navigation";

import ecommerceImg from "@/assets/ecommerce-project.jpg";
import frontendImg from "@/assets/frontend-project.jpg";
import bankingImg from "@/assets/banking-project.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [swiperRef, setSwiperRef] = useState<any>(null);

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Comprehensive microservices-based e-commerce solution with advanced features",
      image: ecommerceImg,
      tags: ["Spring Boot", "MongoDB", "PostgreSQL", "AWS ECS", "JWT", "Jenkins"],
      highlights: [
        "Spring Boot 3 microservices with JWT RBAC + API Gateway",
        "MongoDB + PostgreSQL polyglot persistence (-25% latency)",
        "Deployed on AWS ECS with Jenkins Blue-Green CI/CD (99.9% uptime)",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Meta Frontend Capstone",
      description: "Responsive React application with modern frontend best practices",
      image: frontendImg,
      tags: ["React", "Redux Toolkit", "TypeScript", "Storybook", "WCAG 2.1"],
      highlights: [
        "Responsive React app with Redux Toolkit & Router",
        "WCAG 2.1 AA accessibility compliance",
        "Storybook + TypeScript component library (-35% dev time)",
        "Lazy loading + memoization (+20% Core Web Vitals)",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Banking Transaction Monitoring Dashboard",
      description: "Real-time financial transaction monitoring with comprehensive analytics",
      image: bankingImg,
      tags: ["React", "Redux", "Spring Boot", "PostgreSQL", "MongoDB", "ELK"],
      highlights: [
        "Real-time React + Redux dashboard with Spring Boot APIs",
        "PostgreSQL + MongoDB polyglot persistence",
        "ELK, Prometheus, Grafana monitoring (-40% investigation time)",
      ],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => swiperRef?.slidePrev()}
              variant="outline"
              size="icon"
              className="hover-glow border-primary"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </Button>
            <Button
              onClick={() => swiperRef?.slideNext()}
              variant="outline"
              size="icon"
              className="hover-glow border-primary"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </Button>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            onSwiper={setSwiperRef}
            spaceBetween={30}
            slidesPerView={1}
            modules={[Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden hover-glow border border-border group h-full flex flex-col"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-heading font-bold mb-2 gradient-text">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1 mb-4 flex-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-foreground/80"
                        >
                          <span className="text-accent mt-0.5">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-border">
                      {/* <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover-glow border-primary group/btn"
                        asChild
                      > */}
                        {/* <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4 text-primary group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </a> */}
                      {/* </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 hover-glow border-accent group/btn"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4 text-accent group-hover/btn:scale-110 transition-transform" />
                          Code
                        </a>
                      </Button> */}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
