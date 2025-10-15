import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Java Programming & Software Engineering Fundamentals",
      issuer: "Coursera",
      link: "#",
    },
    {
      title: "Spring Framework & Spring Boot Specialization",
      issuer: "Coursera",
      link: "#",
    },
    {
      title: "Full Stack Web Development with React",
      issuer: "Coursera",
      link: "#",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "LinkedIn Learning",
      link: "#",
    },
    {
      title: "DevOps Foundations: CI/CD with Jenkins & GitHub Actions",
      issuer: "LinkedIn Learning",
      link: "#",
    },
    {
      title: "Kubernetes for Developers",
      issuer: "Coursera",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover-glow border border-border group relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

              <div className="relative">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg leading-tight mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>

                {/* <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors group/link"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
