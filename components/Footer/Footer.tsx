import styles from "./Footer.module.css";

type Props = {
  title: string;
};

const Footer = ({ title }: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>{title}</span>
        <span className={styles.copy}>
          © {new Date().getFullYear()} {title}. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
