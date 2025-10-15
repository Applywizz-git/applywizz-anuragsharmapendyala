import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { Award, Briefcase, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Briefcase, value: 10, label: "Projects", suffix: "+" },
    { icon: Award, value: 3, label: "Years Experience", suffix: "+" },
    { icon: Heart, value: 100, label: "Satisfaction", suffix: "%" },
  ];

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              Full Stack Java Developer with <strong className="text-primary">3+ years of experience</strong> designing and deploying scalable, cloud-native applications using Java, Spring Boot, Spring Cloud, React.js, Angular, and AWS.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Expert in building <strong className="text-accent">microservices</strong>, REST/GraphQL APIs, and event-driven systems with Kafka and RabbitMQ.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              Proficient in secure coding (JWT/OAuth2), CI/CD pipelines (Docker, Kubernetes, Jenkins), and optimizing databases (PostgreSQL, Redis, DynamoDB).
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-2xl hover-glow group cursor-pointer border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-extrabold gradient-text">
                      {isInView && (
                        <CountUp
                          end={stat.value}
                          duration={2.5}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
