import React from "react";

const DashEmbed = () => {
  return (
    <div style={{ width: "100%", height: "100vh", border: "none" }}>
      <iframe
        src="http://127.0.0.1:8050/" // Change this to the Dash app URL
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="ICC 2007 Cricket Tournament Explorer"
      />
    </div>
  );
};

export default DashEmbed;