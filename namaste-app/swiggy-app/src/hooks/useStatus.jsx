import { useState, useEffect } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(() => navigator.onLine);

  useEffect(() => {
    const handleOffline = () => setStatus(false);
    const handleOnline = () => setStatus(true);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return { status };
};

export default useStatus;
