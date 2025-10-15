import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science in Information Technology",
      institution: "University of Cincinnati",
      location: "Cincinnati, OH",
      period: "Aug 2023 – Dec 2024",
      gpa: "",
    },
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Vaagdevi College of Engineering",
      location: "Hyderabad, India",
      period: "Aug 2019 – Jun 2023",
      gpa: "",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-secondary/5" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover-glow border border-border group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold gradient-text mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl font-semibold text-foreground mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-accent" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-accent" />
                      {edu.period}
                    </div>
                  </div>

                  {/* <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20 font-semibold">
                    GPA: {edu.gpa}
                  </div> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
