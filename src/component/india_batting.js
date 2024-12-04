import React, { useEffect } from 'react';

const IndiaBatting = () => {
  useEffect(() => {
    // Dynamically load the Tableau JS API script
    const script = document.createElement('script');
    script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    script.onload = () => {
      const divElement = document.getElementById('viz1733026102379');
      const vizElement = divElement.getElementsByTagName('object')[0];
      
      // Set width and height for the embedded Tableau visualization
      vizElement.style.width = '100%';
      vizElement.style.height = `${divElement.offsetWidth * 0.75}px`;  // Adjust height based on width 
    };
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tableau-vis">
      <div
        className="tableauPlaceholder"
        id="viz1733026102379"
        style={{
          position: "relative",
          width: '100%',
          height: 'auto',
          maxWidth: '100%',
      }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Sheet 1"
              src="https://public.tableau.com/static/images/Bo/Book3_17330260873820/Sheet1/1_rss.png"
              style={{ border: 'none' }}
            />
          </a>
        </noscript>
        <object
          className="tableauViz"
          style={{ display: 'none' }}
          data-src="https://public.tableau.com/views/Book3_17330260873820/Sheet1?:embed=y&:display_count=yes"
        >
          <param name="host_url" value="https://public.tableau.com/" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="Book3_17330260873820/Sheet1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Bo/Book3_17330260873820/Sheet1/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>
  );
};

export default IndiaBatting;
