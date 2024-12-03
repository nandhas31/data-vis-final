import React, { useEffect } from 'react';

const JoginderPerf = () => {
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
      <div class='tableauPlaceholder' id='viz1733260331169' style={{
            position: "relative", 
            width: '100%', 
            height: 'auto', 
            maxWidth: '100%',
          }}><noscript><a href='#'><img
                alt='Why Joginder over Harbhajan? '
                src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_17332577101340&#47;Sheet2&#47;1_rss.png'
                style={{ border: 'none' }} /></a></noscript><object class='tableauViz' style={{
                    display: 'none', 
                    width: '100%',  // Full width of the container
                    height: '75vh', // Dynamic height based on viewport height (adjustable)
                  }}>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='Book1_17332577101340&#47;Sheet2' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image'
            value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bo&#47;Book1_17332577101340&#47;Sheet2&#47;1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-US' />
    </object></div>
<script
    type='text/javascript'>                    var divElement = document.getElementById('viz1733260331169'); var vizElement = divElement.getElementsByTagName('object')[0]; vizElement.style.width = '100%'; vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>
    </div>
  );
};

export default JoginderPerf;
