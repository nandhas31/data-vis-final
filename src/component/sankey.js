import { Component } from 'react';

class Sankey extends Component {
  render() {
    return (
      <div className='tableau-vis'>
        <div 
          className="tableauPlaceholder" 
          id="viz1733087600902" 
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
            style={{
              display: 'none', 
              width: '100%',  // Full width of the container
              height: '75vh', // Dynamic height based on viewport height (adjustable)
            }}
          >
            <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="Book3_17330260873820/Sheet1" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param name="static_image" value="https://public.tableau.com/static/images/Bo/Book3_17330260873820/Sheet1/1.png" />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
        <script
          type="text/javascript"
        >
          var divElement = document.getElementById('viz1733087600902');
          var vizElement = divElement.getElementsByTagName('object')[0];
          vizElement.style.width = '100%';
          vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px'; // Responsive height based on width
          var scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </script>
      </div>
    );
  }
}

export default Sankey;