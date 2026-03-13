import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button, Result } from "antd";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Result
        status="404"
        title="404"
        subTitle="Oops! Page not found."
        extra={
          <Button type="primary" href="/">
            Return to Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
