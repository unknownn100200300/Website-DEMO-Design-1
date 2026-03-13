import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const navItems = [
  { key: "home", label: "Home", href: "#home" },
  { key: "portfolio", label: "Portfolio", href: "#solutions" },
  { key: "industries", label: "Industries", href: "#industries" },
  { key: "technology", label: "Technology", href: "#technology" },
  { key: "presence", label: "Global Presence", href: "#about" },
  { key: "products", label: "Products", href: "#products" },
  { key: "contact", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <Layout.Header
        className={`h-16 px-0 transition-all duration-300 ${
          scrolled ? "backdrop-blur-nav bg-background/80 border-b border-border" : "bg-transparent"
        }`}
        style={{ lineHeight: "64px" }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              {logoOk ? (
                <img
                  src="/ari-logo.png"
                  alt="ARI Simulation"
                  className="h-8 w-auto [filter:drop-shadow(0_0_10px_rgba(34,197,94,0.25))]"
                  loading="eager"
                  decoding="async"
                  onError={() => setLogoOk(false)}
                />
              ) : (
                <div className="w-10 h-10 rounded border border-primary/40 flex items-center justify-center shadow-neon">
                  <Typography.Text className="font-display text-xl font-bold text-primary">
                    A
                  </Typography.Text>
                </div>
              )}
              <Typography.Text className="hidden sm:block font-display text-lg font-bold tracking-wider text-foreground">
                ARI SIMULATION
              </Typography.Text>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden md:block">
            <Menu
              mode="horizontal"
              selectable={false}
              style={{ background: "transparent", borderBottom: "none" }}
              items={navItems.map((item) => ({
                key: item.key,
                label: (
                  <a
                    href={item.href}
                    className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ),
              }))}
            />
          </div>

          {/* Mobile toggle */}
          <Button
            className="md:hidden"
            type="text"
            aria-label="Open menu"
            icon={<MenuOutlined />}
            onClick={() => setMobileOpen(true)}
          />
        </div>
      </Layout.Header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode="inline"
          selectable={false}
          items={navItems.map((item) => ({
            key: item.key,
            label: item.label,
            onClick: () => {
              window.location.hash = item.href;
              setMobileOpen(false);
            },
          }))}
        />
      </Drawer>
    </motion.div>
  );
};

export default Navbar;
