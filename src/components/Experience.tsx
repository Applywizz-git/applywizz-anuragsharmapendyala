import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Java Developer",
      company: "Optum (Remote)",
      location: "Chicago, IL",
      period: "Jun 2025 – Present",
      highlights: [
        "Developed REST & GraphQL APIs using Java + Spring Boot; improved query latency by 22%",
        "Built Kafka-based system handling 5M+ messages/day (+35% throughput)",
        "Migrated monolith → microservices on AWS ECS (release time -60%)",
        "Optimized PostgreSQL + DynamoDB + Redis; performance +25%",
        "CI/CD with Jenkins + GitHub Actions; deployment -40% faster",
        "HIPAA-compliant security (OAuth2 + IAM)",
        "ELK + Prometheus dashboards; incident response -45%",
      ],
    },
    {
      title: "Software Engineer",
      company: "Sunrisemitra Global Technologies",
      location: "Hyderabad, India",
      period: "Jun 2021 – Jul 2023",
      highlights: [
        "Created REST/GraphQL APIs, microservices with Spring Boot, Kafka",
        "Migrated monolithic app to containerized microservices",
        "Improved database performance by 25%",
        "Implemented OAuth2 + IAM for compliance",
        "Automated pipelines and built observability dashboards",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Sunrisemitra Global Technologies",
      location: "Hyderabad, India",
      period: "Jun 2020 – May 2021",
      highlights: [
        "Built secure APIs (JWT auth) with Spring Boot + Hibernate",
        "Redesigned dashboards using React.js + Angular; UX +25%",
        "Integrated Kafka for async event processing",
        "Optimized PostgreSQL + MongoDB with Redis caching",
        "Automated deployments (Docker + Jenkins)",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/5" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 top-8 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-glow-pulse" />

                {/* Content Card */}
                <div className="glass p-6 md:p-8 rounded-2xl md:ml-16 hover-glow border border-border group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-heading font-bold gradient-text group-hover:scale-105 transition-transform inline-block">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-lg font-semibold text-foreground mt-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-accent" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-accent" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground/90"
                      >
                        <span className="text-primary mt-1.5 text-xs">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
