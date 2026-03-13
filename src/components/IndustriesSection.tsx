import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  BookOutlined,
  CloudOutlined,
  CompassOutlined,
  ContainerOutlined,
  FireOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const industries = [
  { icon: SafetyOutlined, name: "Defence", desc: "Mission rehearsal, tactical proving, and simulator-based force readiness." },
  { icon: CompassOutlined, name: "Marine", desc: "Navigation, bridge operations, and marine training systems." },
  { icon: FireOutlined, name: "Offshore", desc: "Offshore operations training with dynamic modeling and realistic scenarios." },
  { icon: ContainerOutlined, name: "Ports & Terminals", desc: "Container handling, terminal operations, and logistics training." },
  { icon: CloudOutlined, name: "Cloud & Digital", desc: "Cloud-based solutions supporting large-scale users and installations." },
  { icon: BookOutlined, name: "Training & Assessment", desc: "Structured training delivery, assessment, and compliance-driven programs." },
];

const IndustriesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="industries" className="py-24 relative">
      <div className="absolute inset-0 gradient-navy opacity-50" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography.Text className="text-sm tracking-[0.3em] uppercase text-primary mb-3 block">
            Sectors
          </Typography.Text>
          <Typography.Title level={2} className="font-display !text-foreground !mb-0 text-4xl md:text-5xl">
            Industries We Serve
          </Typography.Title>
        </motion.div>

        <Row gutter={[24, 24]} justify="center">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Col key={ind.name} xs={12} md={8} lg={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <Card
                    hoverable
                    style={{
                      background: "hsl(var(--card) / 0.5)",
                      borderColor: "hsl(var(--border))",
                    }}
                    className="text-center"
                    styles={{ body: { padding: 20 } }}
                  >
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary text-3xl group-hover:scale-110 transition-transform" />
                    </div>
                    <Typography.Title level={5} className="font-display !mb-2 text-foreground">
                      {ind.name}
                    </Typography.Title>
                    <Typography.Paragraph className="text-xs text-muted-foreground leading-relaxed !mb-0">
                      {ind.desc}
                    </Typography.Paragraph>
                  </Card>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default IndustriesSection;
