import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, GraduationCap, Heart, Lightbulb, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.A in Computer Science, Very Good GPA, Al-Zaytoonah University of Jordan (2022-2026)",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Volunteer Team Leader and active IEEE & Google Developers Group Member",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Strong analytical skills demonstrated through Hackathons and competitive programming challenges",
    },
    {
      icon: Heart,
      title: "UI/UX Design & AI",
      description: "Dedicated to user-centered design, prototyping, and integrating AI-powered workflows",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title justify-center mb-4">
            <span className="section-title-icon">
              <User className="w-5 h-5 text-primary-foreground" />
            </span>
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A dedicated Computer Science graduate with a passion for continuous learning and creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
