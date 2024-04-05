import React, { useEffect, useState } from "react";

const Clock = ({ time: initial }) => {
  const [dateTime, setDateTime] = useState(new Date(initial));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      setDateTime(new Date());
    };

    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    setIsClient(true); // Mark as client-side render
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex md:flex-col justify-between md:items-center mr-5">
      {isClient ? (
        <>
          <span>{dateTime.toLocaleTimeString()}</span>

          <span className="ml-[5px]">{dateTime.toLocaleDateString()}</span>
        </>
      ) : (
        "Prerendered" // Render different content on the server
      )}
    </div>
  );
};

export default Clock;
