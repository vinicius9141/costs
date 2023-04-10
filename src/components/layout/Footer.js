import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {

  return(
    <>
      <footer className={styles.footer}>
        <ul className={styles.socialList}>
          <li>
            <FaFacebook />
          </li>

          <li>
            <FaInstagram />
          </li>

          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className={styles.copyRight}>
          <span>Coasts &copy; 2023</span>
        </p>
      </footer>
    </>
  )
}

export default Footer