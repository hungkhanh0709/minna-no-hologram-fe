import Image from "next/image"
import styles from "./footer.module.scss"

export function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.footerLogo}>
        <Image width={133} height={53} src='/images/logo-footer.svg' alt='' />

      </div>
      <div className={styles.footerCopyright}>
        © 2025 Betonamura. All rights reserved.
      </div>
    </div>
  </footer>

}


