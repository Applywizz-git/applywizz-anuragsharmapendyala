import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Tilt from "react-parallax-tilt";
import { Button } from "./ui/button";
import profileImg from "/anuraghprofileimage.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden py-10"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <Tilt
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              scale={1.05}
              transitionSpeed={400}
              className="w-full max-w-md"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-50 animate-glow-pulse" />
                <img
                  src={profileImg}
                  alt="Anurag Sharma Pendyala"
                  className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-primary/20"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold leading-tight">
                Hi, I'm{" "}
                
                {/* <span className="gradient-text">Anurag Sharma</span> */}
              </h1>
              {/* <br/> */}
              <h1>
                                <span className="gradient-text text-5xl md:text-7xl font-heading font-extrabold leading-tight">Anurag Sharma</span>

              </h1>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground h-20"
            >
              <TypeAnimation
                sequence={[
                  "Building Scalable Web Apps with React",
                  2000,
                  "Building Scalable Web Apps with Java",
                  2000,
                  "Building Scalable Web Apps with Spring Boot",
                  2000,
                  "Building Scalable Web Apps with Microservices",
                  2000,
                  "Building Scalable Web Apps with Cloud",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-medium"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground max-w-2xl"
            >
              Full Stack Java Developer specialized in crafting high-performance,
              scalable, and cloud-native applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group px-8 py-6 text-lg"
                >
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </Button>
              </ScrollLink>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow px-8 py-6 text-lg group"
                asChild
              >
                <a href="/RESUME_ANURAG_SHARMA_PENDYALA_JAVA FULL STACK DEVELOPER 1.pdf" download>
                  <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ScrollLink to="about" smooth={true} duration={500}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              <ArrowDown className="h-8 w-8" />
            </motion.div>
          </ScrollLink>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
