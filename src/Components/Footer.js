import React from "react";
// import { logoTwitter } from "@ionic/react";
// import { logoInstagram } from "@ionic/react";
// import { logoYoutube } from "@ionic/react";
// import { logoGithub } from "@ionic/react";

function Footer() {
  return (
    <footer className="footer">
      {/* <div id="app"> */}
        <ul>
          <li>
            <a href="https://twitter.com/sarnoire">
              {/* <IonIcon icon={ logoTwitter } /> */}
              Twitter
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sarnoire/">
              {/* <IonIcon icon={ logoInstagram } /> */}
            Instagram
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@sarnoire/">
              {/* <IonIcon icon={ logoYoutube } /> */}
            YouTube
            </a>
          </li>
          <li>
            <a href="https://github.com/sarnoire">
                {/* <IonIcon icon={ logoGithub } /> */}
              Github
            </a>
          </li>
        </ul>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
