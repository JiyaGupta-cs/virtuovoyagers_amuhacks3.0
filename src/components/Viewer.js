import React, { useEffect } from 'react';
import '../App.css';

const Viewer = () => {
  useEffect(() => {
    // Function to add CSS class to the logo SVG
    const addClassToLogo = () => {
      const logoSVG = document.getElementById('logo');
      if (logoSVG) {
        logoSVG.style.display = 'none'; // Change display property to make it visible
      }
    };

    // Call the function to add the CSS class after a delay of 1000ms
    const timeoutId = setTimeout(addClassToLogo, 1000);
      
    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once after the initial render

  return (
    <div>
      <iframe
        title="Spline Viewer"
        srcDoc={`
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Spline Viewer</title>
              <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.91/build/spline-viewer.js"></script>
              <style>
                  html, body {
                      margin: 0;
                      height: 100%;
                      overflow: hidden;
                  }
                  body {
                      display: flex;
                      justify-content: center;
                      align-items: center;
                  }
                  #spline-container {
                      width: 100%;
                      height: 100vh;
                  }
                #logo{
                  position:static;
                }
                  #logo svg {
                    display: none;
                    margin-right: 20px;
                }
                #spline-container > spline-viewer > #container > #preloader {
                  display: block !important;
                  position: static !important;
                }
                #spline-container > spline-viewer > div > a {
                  display: none !important;
                  position: static !important;
                }
              </style>
          </head>
          <body>
              <div id="spline-container">
                  <spline-viewer url="https://prod.spline.design/vl94dGc7hBPoUhcf/scene.splinecode"></spline-viewer>
              </div>
          </body>
          </html>
        `}
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </div>
  );
};

export default Viewer;
