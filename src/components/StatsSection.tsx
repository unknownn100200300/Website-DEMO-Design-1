import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Col, Row, Statistic, Typography } from "antd";

const stats = [
  { value: 26, suffix: "+", label: "Years of Expertise" },
  { value: 1300, suffix: "+", label: "Installations" },
  { value: 20, suffix: "+", label: "Marine & Offshore Simulators" },
  { value: 30, suffix: "+", label: "Crane Simulators" },
];

const AnimatedStatistic = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="text-center">
      <Statistic
        value={count}
        suffix={suffix}
        valueStyle={{
          color: "hsl(var(--primary))",
          textShadow: "0 0 20px hsl(var(--primary) / 0.5)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "3rem",
          lineHeight: 1.1,
        }}
      />
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-navy opacity-40" />
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <Row gutter={[24, 24]} justify="center">
          {stats.map((stat, i) => (
            <Col key={stat.label} xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <AnimatedStatistic value={stat.value} suffix={stat.suffix} inView={inView} />
                <Typography.Text className="mt-2 text-sm tracking-widest uppercase text-muted-foreground block">
                  {stat.label}
                </Typography.Text>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default StatsSection;
