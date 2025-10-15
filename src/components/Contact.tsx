// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import confetti from "canvas-confetti";

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Trigger confetti
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//       colors: ["#E63946", "#9D4EDD", "#E0E0E0"],
//     });

//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });

//     setFormData({ name: "", email: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "anuragsharmamasters@gmail.com",
//       href: "mailto:anuragsharmamasters@gmail.com",
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       value: "linkedin.com/in/anurag-sharma-pendyala",
//       href: "https://linkedin.com/in/anurag-sharma-pendyala",
//     },
//     {
//       icon: MapPin,
//       label: "Location",
//       value: "Cincinnati, OH",
//       href: "#",
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 px-4" ref={ref}>
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">
//             Get In <span className="gradient-text">Touch</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-heading font-bold mb-6">
//               Let's Connect
//             </h3>
//             <p className="text-lg text-muted-foreground mb-8">
//               I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
//             </p>

//             <div className="space-y-4">
//               {contactInfo.map((info, index) => (
//                 <motion.a
//                   key={info.label}
//                   href={info.href}
//                   target={info.href.startsWith("http") ? "_blank" : "_self"}
//                   rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                   className="glass p-4 rounded-xl flex items-center gap-4 hover-glow border border-border group"
//                 >
//                   <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
//                     <info.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-muted-foreground">{info.label}</p>
//                     <p className="font-semibold">{info.value}</p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             {/* Social Links */}
//             <div className="flex gap-4 pt-6">
//               <a
//                 href="https://github.com/anurag-sharma-pendyala"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 glass rounded-xl hover-glow border border-border group"
//               >
//                 <Github className="h-6 w-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
//               </a>
//               <a
//                 href="https://linkedin.com/in/anurag-sharma-pendyala"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 glass rounded-xl hover-glow border border-border group"
//               >
//                 <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
//               </a>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="glass p-8 rounded-2xl border border-border"
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-2">
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Your name"
//                   className="bg-background/50 border-border focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="your.email@example.com"
//                   className="bg-background/50 border-border focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="Tell me about your project..."
//                   rows={5}
//                   className="bg-background/50 border-border focus:border-primary resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group"
//                 size="lg"
//               >
//                 {isSubmitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
































import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#E63946", "#9D4EDD", "#E0E0E0"],
    });

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anuragsharmamasters@gmail.com",
      href: "mailto:anuragsharmamasters@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anurag-sharma-pendyala",
      href: "https://linkedin.com/in/anurag-sharma-pendyala",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cincinnati, OH",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-bold">Let's Connect</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass p-4 rounded-xl flex items-center gap-4 hover-glow border border-border group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold break-all sm:break-normal">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 pt-6">
              {/* <a
                href="https://github.com/anurag-sharma-pendyala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover-glow border border-border group"
              >
                <Github className="h-6 w-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
              </a> */}
              <a
                href="https://linkedin.com/in/anurag-sharma-pendyala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl hover-glow border border-border group"
              >
                <Linkedin className="h-6 w-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-6 sm:p-8 rounded-2xl border border-border w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-glow group text-base sm:text-lg"
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

