import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Wrench, Coffee, FileCode, Smartphone, Gamepad2, Cloud, GitBranch, Globe, Plug, Bot, Workflow, Layout } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java SE", icon: Coffee },
        { name: "Python", icon: FileCode },
        { name: "Dart", icon: Smartphone },
        { name: "C#", icon: Gamepad2 },
      ],
    },
    {
      title: "Design & UX/UI",
      icon: Palette,
      skills: [
        { name: "Adobe Photoshop", icon: Palette },
        { name: "Adobe Illustrator", icon: Palette },
        { name: "Figma", icon: Layout },
        { name: "Wireframing & Prototyping", icon: Layout },
      ],
    },
    {
      title: "Technologies & AI",
      icon: Wrench,
      skills: [
        { name: "AWS & Google Cloud", icon: Cloud },
        { name: "Git & GitHub", icon: GitBranch },
        { name: "APIs & Frontend", icon: Globe },
        { name: "Prompt Design", icon: Bot },
        { name: "N8N Automation", icon: Workflow },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
              <Code className="w-5 h-5 text-primary-foreground" />
            </span>
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning programming, design, and modern development technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                  {(() => {
                    const CategoryIcon = category.icon;
                    return <CategoryIcon className="w-5 h-5 text-primary" />;
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.15 + skillIndex * 0.05 }}
                      className="skill-tag"
                    >
                      <SkillIcon className="w-4 h-4" />
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
