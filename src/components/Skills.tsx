import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Angular", "Redux Toolkit", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "Spring Cloud", "REST", "GraphQL", "Kafka", "RabbitMQ"],
    },
    {
      category: "Cloud",
      skills: ["AWS", "Azure", "GCP"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "Terraform", "GitHub Actions", "ArgoCD"],
    },
    {
      category: "Testing",
      skills: ["JUnit", "Mockito", "Selenium", "Jest", "Cypress"],
    },
    {
      category: "Monitoring",
      skills: ["ELK Stack", "Prometheus", "Grafana"],
    },
    {
      category: "Tools",
      skills: ["Git", "Bitbucket", "Jira", "Confluence"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/5" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-glow border border-border group"
            >
              <h3 className="text-xl font-heading font-bold mb-4 gradient-text">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                    className="px-3 py-1.5 text-sm bg-primary/10 text-foreground rounded-lg border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
