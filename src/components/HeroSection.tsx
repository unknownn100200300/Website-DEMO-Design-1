import { motion } from "framer-motion";
import { Button, Space, Typography } from "antd";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt="Naval command simulation center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-grid-pattern" />
      </motion.div>

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-primary/10 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          <Typography.Text className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
            Applied Research International (ARI)
          </Typography.Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <Typography.Title
            level={1}
            className="font-display !text-foreground !mb-0 text-5xl md:text-7xl lg:text-8xl leading-tight"
          >
            Naval &amp; Marine
            <br />
            <span className="text-primary text-glow">Simulation</span>
            <br />
            &amp; VR Training
          </Typography.Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <Typography.Paragraph className="text-lg md:text-xl text-muted-foreground !mb-0">
            Applied Research International (ARI), the naval and marine simulation arm of Zen Technologies
            Limited, is a global leader in the production of sophisticated simulation and virtual
            reality training solutions for the defence, marine and offshore industries.
          </Typography.Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex justify-center"
        >
          <Space size="middle" direction="horizontal" className="flex flex-col sm:flex-row">
            <Button
              size="large"
              type="primary"
              href="#solutions"
              className="gradient-accent shadow-neon font-display font-semibold tracking-wider uppercase"
            >
              Explore Portfolio
            </Button>
            <Button
              size="large"
              href="#contact"
              className="font-display font-semibold tracking-wider uppercase"
              ghost
            >
              Contact Us
            </Button>
          </Space>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
