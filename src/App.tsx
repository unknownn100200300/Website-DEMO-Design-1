import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App as AntApp, ConfigProvider, theme } from "antd";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          // Keep AntD aligned to the app's CSS-variable theme (green/black).
          colorPrimary: "hsl(var(--primary))",
          colorBgBase: "hsl(var(--background))",
          colorBgContainer: "hsl(var(--card))",
          colorBgElevated: "hsl(var(--popover))",
          colorText: "hsl(var(--foreground))",
          colorTextBase: "hsl(var(--foreground))",
          colorTextSecondary: "hsl(var(--muted-foreground))",
          colorBorder: "hsl(var(--border))",
          colorSplit: "hsl(var(--border))",
          borderRadius: 8,
        },
      }}
    >
      <AntApp>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AntApp>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
