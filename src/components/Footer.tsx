import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // {
    //   icon: Github,
    //   href: "https://github.com/anurag-sharma-pendyala",
    //   label: "GitHub",
    // },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/anurag-sharma-pendyala",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:anuragsharmamasters@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-8 px-4 bg-secondary/5 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-xl hover-glow border border-border group"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              © {currentYear}{" "}
              <span className="font-heading font-bold gradient-text animate-glow-pulse">
                Anurag Sharma Pendyala
              </span>
              {/* . Crafted with{" "} */}
              {/* <Heart className="h-4 w-4 text-primary inline-block animate-pulse" fill="currentColor" /> */}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
