import { CheckCircleFilled } from "@ant-design/icons";
import { Card, List, Tabs, Typography } from "antd";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tabs = [
  {
    key: "graphics",
    label: "Real-Time Graphics",
    title: "High-Fidelity Real-Time Graphics",
    desc: "Advanced real-time graphics for immersive training environments with realistic scenarios and visual systems.",
    features: [
      "Immersive visualization systems",
      "Real-time scenario rendering",
      "Accurate environments and assets",
      "Training-focused visual fidelity",
    ],
  },
  {
    key: "vrar",
    label: "VR/AR Training",
    title: "Virtual and Augmented Reality",
    desc: "Virtual and augmented reality training capabilities designed to raise realism, engagement, and repeatability in learning.",
    features: [
      "Virtual reality training modules",
      "Augmented reality workflows",
      "Immersive learning experiences",
      "Safe, repeatable practice",
    ],
  },
  {
    key: "modeling",
    label: "Dynamic Modeling",
    title: "Dynamic Modeling and Simulation",
    desc: "Dynamic modeling capabilities that support realistic behavior and performance across mission-critical training scenarios.",
    features: [
      "Scenario-driven simulation",
      "System behavior modeling",
      "Training-ready accuracy",
      "Configurable exercise design",
    ],
  },
  {
    key: "interop",
    label: "Interoperability",
    title: "Integration and Interoperability",
    desc: "Designed for integration across multiple simulator types with interoperability for team training and combined mission exercises.",
    features: [
      "Multi-simulator integration",
      "Real-time data exchange",
      "Team and collective training",
      "Scalable configurations",
    ],
  },
  {
    key: "cloud",
    label: "Cloud Systems",
    title: "Cloud-Based Solutions",
    desc: "Cloud-enabled delivery supporting large deployments, cloud-based solutions, and digital-first training workflows.",
    features: [
      "Cloud-based training delivery",
      "Scalable user access",
      "Centralized management",
      "Modern deployment options",
    ],
  },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="technology" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography.Text className="text-sm tracking-[0.3em] uppercase text-primary mb-3 block">
            Innovation
          </Typography.Text>
          <Typography.Title
            level={2}
            className="font-display !text-foreground !mb-0 text-4xl md:text-5xl"
          >
            Core Technologies
          </Typography.Title>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs
            defaultActiveKey="graphics"
            centered
            items={tabs.map((tab) => ({
              key: tab.key,
              label: (
                <span className="font-display font-semibold tracking-wider uppercase">
                  {tab.label}
                </span>
              ),
              children: (
                <Card
                  style={{
                    background: "hsl(var(--card) / 0.5)",
                    borderColor: "hsl(var(--border))",
                  }}
                  styles={{ body: { padding: 32 } }}
                >
                  <Typography.Title level={3} className="font-display !mb-4 text-foreground">
                    {tab.title}
                  </Typography.Title>
                  <Typography.Paragraph className="text-muted-foreground leading-relaxed !mb-8">
                    {tab.desc}
                  </Typography.Paragraph>
                  <List
                    grid={{ gutter: 16, xs: 1, sm: 2 }}
                    dataSource={tab.features}
                    renderItem={(feature) => (
                      <List.Item>
                        <div className="flex items-center gap-3">
                          <CheckCircleFilled className="text-primary" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      </List.Item>
                    )}
                  />
                </Card>
              ),
            }))}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
