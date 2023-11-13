import "../../Layout/footer/Footer.css";

import { Icon } from '@iconify/react';

export const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <ul className="redessociales">
          <a href="https://www.instagram.com/pablo.marquez.arg/" target="_blank" rel="noopener noreferrer">
            <Icon icon="skill-icons:instagram" />
          </a>
          <a href="https://www.youtube.com/PabloMarquez01" target="_blank" rel="noopener noreferrer">
            <Icon icon="logos:youtube" />
          </a>
          <a href="https://www.youtube.com/PabloMarquezStudio" target="_blank" rel="noopener noreferrer">
            <Icon icon="logos:youtube-icon" />
          </a>
        </ul>
      </div>
    </>
  )
}

export default Footer;