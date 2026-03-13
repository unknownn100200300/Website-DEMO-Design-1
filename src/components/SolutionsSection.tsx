import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, Col, Row, Typography } from "antd";
import marineSim from "@/assets/marine-sim.jpg";
import offshoreSim from "@/assets/offshore-sim.jpg";
import craneSim from "@/assets/crane-sim.jpg";
import navalDefense from "@/assets/naval-defense.jpg";
import engineeringSim from "@/assets/engineering-sim.jpg";

const solutions = [
  {
    title: "Defence Suite",
    desc: "Different types of defence simulators for a range of weapon systems, air assets and naval platforms.",
    image: navalDefense,
  },
  {
    title: "Marine & Offshore Simulators",
    desc: "A comprehensive range covering marine and offshore operations, training, and assessment.",
    image: marineSim,
  },
  {
    title: "Crane Simulators",
    desc: "Operational training simulators across essential aspects of container, offshore, and bulk handling.",
    image: craneSim,
  },
  {
    title: "Ports & Terminals",
    desc: "Simulation systems supporting port operations, terminals, and logistics-focused training.",
    image: offshoreSim,
  },
  {
    title: "DNV-Certified Range",
    desc: "Entire marine and offshore range is Det Norske Veritas (DNV) certified and globally approved.",
    image: engineeringSim,
  },
];

const SolutionCard = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Card
        hoverable
        cover={
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        }
        style={{
          background: "hsl(var(--card))",
          borderColor: "hsl(var(--border))",
          boxShadow: "var(--shadow-card)",
        }}
        styles={{ body: { padding: 20 } }}
      >
        <Typography.Title level={4} className="font-display !mb-2 text-foreground group-hover:text-primary transition-colors">
          {solution.title}
        </Typography.Title>
        <Typography.Paragraph className="text-sm text-muted-foreground leading-relaxed !mb-0">
          {solution.desc}
        </Typography.Paragraph>
        <div className="mt-3 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
      </Card>
    </motion.div>
  );
};

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography.Text className="text-sm tracking-[0.3em] uppercase text-primary mb-3 block">
            Portfolio
          </Typography.Text>
          <Typography.Title level={2} className="font-display !text-foreground !mb-0 text-4xl md:text-5xl">
            ARI Simulation Portfolio
          </Typography.Title>
        </motion.div>

        <Row gutter={[24, 24]}>
          {solutions.map((sol, i) => (
            <Col key={sol.title} xs={24} md={12} lg={8}>
              <SolutionCard solution={sol} index={i} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SolutionsSection;
