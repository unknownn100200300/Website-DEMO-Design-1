import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Col, Divider, Layout, Row, Space, Typography } from "antd";
import { useState } from "react";

const FooterSection = () => {
  const [logoOk, setLogoOk] = useState(true);
  return (
    <Layout.Footer id="contact" className="py-16 border-t border-border bg-transparent">
      <div className="container mx-auto px-4">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={6}>
            <Space direction="vertical" size="middle">
              <div className="flex items-center gap-3">
                {logoOk ? (
                  <img
                    src="/ari-logo.png"
                    alt="ARI Simulation"
                    className="h-7 w-auto [filter:drop-shadow(0_0_10px_rgba(34,197,94,0.2))]"
                    loading="lazy"
                    decoding="async"
                    onError={() => setLogoOk(false)}
                  />
                ) : (
                  <div className="w-8 h-8 rounded border border-primary/40 flex items-center justify-center">
                    <Typography.Text className="font-display text-sm font-bold text-primary">
                      A
                    </Typography.Text>
                  </div>
                )}
                <Typography.Text className="font-display text-lg font-bold text-foreground">
                  ARI SIMULATION
                </Typography.Text>
              </div>
              <Typography.Paragraph className="text-sm text-muted-foreground leading-relaxed !mb-0">
                The naval and marine simulation arm of Zen Technologies Limited, delivering sophisticated
                simulation and virtual reality training solutions for defence, marine and offshore.
              </Typography.Paragraph>
            </Space>
          </Col>

          <Col xs={24} md={6}>
            <Typography.Title
              level={5}
              className="font-display text-sm font-semibold tracking-widest uppercase text-foreground"
            >
              Solutions
            </Typography.Title>
            <Space direction="vertical" size={8}>
              {["Marine Simulation", "Offshore Simulation", "Crane Simulation", "Naval Defense", "Engineering"].map(
                (s) => (
                  <a
                    key={s}
                    href="#solutions"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {s}
                  </a>
                ),
              )}
            </Space>
          </Col>

          <Col xs={24} md={6}>
            <Typography.Title
              level={5}
              className="font-display text-sm font-semibold tracking-widest uppercase text-foreground"
            >
              Industries
            </Typography.Title>
            <Space direction="vertical" size={8}>
              {["Maritime", "Oil & Gas", "Defense", "Ports", "Training Institutes"].map((s) => (
                <a
                  key={s}
                  href="#industries"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {s}
                </a>
              ))}
            </Space>
          </Col>

          <Col xs={24} md={6}>
            <Typography.Title
              level={5}
              className="font-display text-sm font-semibold tracking-widest uppercase text-foreground"
            >
              Contact
            </Typography.Title>
            <Space direction="vertical" size={10}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhoneOutlined className="text-primary" />
                +91 11 41326882
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MailOutlined className="text-primary" />
                info@arisimulation.com
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <EnvironmentOutlined className="text-primary mt-0.5" />
                New Delhi, India
              </div>
            </Space>
          </Col>
        </Row>

        <Divider
          style={{
            borderColor: "hsl(var(--border))",
            marginTop: 32,
            marginBottom: 24,
          }}
        />
        <div className="text-center">
          <Typography.Text className="text-xs text-muted-foreground">
            (c) {new Date().getFullYear()} ARI Simulation - Applied Research International Pvt.
            Ltd. All rights reserved.
          </Typography.Text>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default FooterSection;
