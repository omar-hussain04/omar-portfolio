import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Palette, Cloud, Gamepad2, Smartphone, Trophy, Lightbulb, Layout } from "lucide-react";

const CertificationsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      icon: Trophy,
      title: "Problem Solving - Hour of Code",
      issuer: "Faculty of Science and IT",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Palette,
      title: "Foundations of UX Design",
      issuer: "Google / Coursera",
      color: "from-blue-500 to-green-500",
    },
    {
      icon: Lightbulb,
      title: "UX Design Process: Empathize & Define",
      issuer: "Google / Coursera",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Gamepad2,
      title: "Core: Godot Certification",
      issuer: "Endless Foundation",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Layout,
      title: "Complete Figma Course",
      issuer: "Udemy",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "Flutter & Dart Complete Guide",
      issuer: "Udemy",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Practitioner",
      issuer: "Ministry of Digital Communications",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
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
              <Award className="w-5 h-5 text-primary-foreground" />
            </span>
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br ${cert.color} transition-transform duration-300 group-hover:scale-110`}>
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
