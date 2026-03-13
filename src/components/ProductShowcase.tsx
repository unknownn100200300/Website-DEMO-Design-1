import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel, Col, Row, Typography } from "antd";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import marineSim from "@/assets/marine-sim.jpg";
import navalDefense from "@/assets/naval-defense.jpg";
import offshoreSim from "@/assets/offshore-sim.jpg";

const slides = [
  {
    image: navalDefense,
    title: "Integrated Naval Simulation Complex",
    desc: "A cutting-edge training environment integrating multiple high-fidelity simulators into a unified ecosystem for joint, mission-oriented exercises.",
  },
  {
    image: marineSim,
    title: "Naval Bridge Operations Simulator",
    desc: "Recreates the environment of a naval vessel bridge down to the last detail, enabling realistic ship, convoy, and fleet operations training.",
  },
  {
    image: offshoreSim,
    title: "Radar / ARPA Simulator",
    desc: "Built to comply with IMO performance standards and aligned with IMO Model Courses 1.07 and 1.08 for simulator-based training.",
  },
];

const ProductShowcase = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const carouselRef = useRef<any>(null);

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography.Text className="text-sm tracking-[0.3em] uppercase text-primary mb-3 block">
            Featured Products
          </Typography.Text>
          <Typography.Title
            level={2}
            className="font-display !text-foreground !mb-0 text-4xl md:text-5xl"
          >
            Product Showcase
          </Typography.Title>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel ref={carouselRef} afterChange={(idx) => setCurrent(idx)} dots draggable>
            {slides.map((slide) => (
              <div key={slide.title}>
                <Row gutter={[24, 24]} align="middle">
                  <Col xs={24} md={12}>
                    <div className="aspect-video rounded-lg overflow-hidden border border-border">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <Typography.Title level={3} className="font-display !mb-4 text-foreground">
                      {slide.title}
                    </Typography.Title>
                    <Typography.Paragraph className="text-muted-foreground leading-relaxed !mb-6">
                      {slide.desc}
                    </Typography.Paragraph>
                    <Button
                      type="primary"
                      href="#contact"
                      className="gradient-accent shadow-neon font-display font-semibold tracking-wider uppercase"
                    >
                      Learn More
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={() => carouselRef.current?.prev?.()}
              icon={<LeftOutlined />}
              aria-label="Previous slide"
            />
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => carouselRef.current?.goTo?.(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={() => carouselRef.current?.next?.()}
              icon={<RightOutlined />}
              aria-label="Next slide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
