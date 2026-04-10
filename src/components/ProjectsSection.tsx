import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Trophy, Medal, Gamepad2, Building, Users, Cpu, Youtube, CreditCard } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      icon: Cpu,
      title: "AutoNode",
      description: "AI-based automation platform built with Nowa tools. Recognized by the Minister of Higher Education and the President of the University of Jordan.",
      achievement: "1st Place - Pitching Competition",
      achievementIcon: Trophy,
      type: "project",
    },
    {
      icon: Youtube,
      title: "ClickBait Killer",
      description: "Developed using n8n and Google APIs to analyze YouTube content and detect misleading videos.",
      achievement: "3rd Place - Build With AI Hackathon",
      achievementIcon: Medal,
      type: "project",
    },
    {
      icon: Gamepad2,
      title: "Cardlaw",
      description: "32-bit pixel art 2D platformer developed in Godot, applying OOP, FSM, and global state management.",
      achievement: "Graduation Project (2D Game)",
      achievementIcon: CreditCard,
      type: "project",
    },
  ];

  const experiences = [
    {
      icon: Building,
      title: "Software Engineering Intern - Bitknowledgy",
      description: "Hands-on experience in mobile app design, frontend development, APIs, JSON, JWT, and system testing.",
      type: "experience",
    },
    {
      icon: Users,
      title: "Volunteer Team Leader & IEEE/GDG Member",
      description: "Led student teams to organize technical events. Supported peers in programming basics and hackathons at Al-Zaytoonah University.",
      type: "experience",
    },
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title justify-center mb-4">
            <span className="section-title-icon">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </span>
            Projects & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Award-winning projects and valuable professional experiences that shaped my journey.
          </p>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Trophy className="w-6 h-6 text-primary" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6 glow-effect"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 mb-4">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <project.achievementIcon className="w-4 h-4" />
                  {project.achievement}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Building className="w-6 h-6 text-primary" />
            Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-primary/10 flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{exp.title}</h4>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
