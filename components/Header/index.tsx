"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import styles from "./header.module.scss"
import Image from "next/image"
import { FaFlask, FaHourglassEnd, FaHouse, FaMagnifyingGlass, FaMasksTheater, FaPaintRoller } from "react-icons/fa6";


interface HeaderProps {
  activePage?: "home" | "science" | "history" | "culture" | "diy" | ""
  className?: string
}

export function Header({ activePage = "home", className = "" }: HeaderProps) {
  const [searchFocused, setSearchFocused] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <header className={`${styles.header} ${className}`}>
      {/* Desktop Layout */}
      <div className={styles.desktopHeader}>
        {/* Logo */}
        <div className={styles.logoNavWrapper}>
          <div className={styles.logo}>
            <Image width={133} height={53} src='/images/logo.svg' alt='' />
          </div>

          {/* Navigation */}
          <nav className={styles.navigation} style={{ opacity: searchFocused ? 0 : 1 }}>
            <Link href="/" className={`${styles.navItem} ${activePage === "home" ? styles.active : ""}`}>
              <FaHouse size={24} />
              <span>HOME</span>
            </Link>

            <Link href="/science" className={`${styles.navItem} ${activePage === "science" ? styles.active : ""}`}>
              <FaFlask size={24} />
              <span>SCIENCE</span>
            </Link>

            <Link href="/history" className={`${styles.navItem} ${activePage === "history" ? styles.active : ""}`}>
              <FaHourglassEnd size={24} />
              <span>HISTORY</span>
            </Link>

            <Link href="/culture" className={`${styles.navItem} ${activePage === "culture" ? styles.active : ""}`}>
              <FaMasksTheater size={24} />
              <span>CULTURE</span>
            </Link>

            <Link href="/diy" className={`${styles.navItem} ${styles.diy} ${activePage === "diy" ? styles.active : ""}`}>
              <FaPaintRoller size={24} />
              <span>DIY</span>
            </Link>
          </nav>
        </div>

        {/* Search */}
        <div className={styles.searchContainer}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="What will you explore today?"
            className={styles.searchInput}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <button className={styles.searchButton} onClick={() => searchInputRef.current?.focus()}>
            <FaMagnifyingGlass size={22} />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className={styles.mobileHeader}>
        {/* Logo */}
        <div className={styles.mobileLogoContainer}>
          <div className={styles.logo}>
            <Image width={133} height={53} src='/images/logo.svg' alt='' />
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.mobileNavigation}>

          <Link href="/" className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavButton} ${activePage === "home" ? styles.active : ""}`}>
              <FaHouse size={24} />
            </div>
            <span className={`${styles.mobileNavLabel} ${activePage === "home" ? styles.active : ""}`}>Home</span>
          </Link>

          <Link href="/science" className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavButton} ${activePage === "science" ? styles.active : ""}`}>
              <FaFlask size={24} />
            </div>
            <span className={`${styles.mobileNavLabel} ${activePage === "science" ? styles.active : ""}`}>Science</span>
          </Link>

          <Link href="/history" className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavButton} ${activePage === "history" ? styles.active : ""}`}>
              <FaHourglassEnd size={24} />
            </div>
            <span className={`${styles.mobileNavLabel} ${activePage === "history" ? styles.active : ""}`}>History</span>
          </Link>

          <Link href="/culture" className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavButton} ${activePage === "culture" ? styles.active : ""}`}>
              <FaMasksTheater size={24} />
            </div>
            <span className={`${styles.mobileNavLabel} ${activePage === "culture" ? styles.active : ""}`}>Culture</span>
          </Link>

          <Link href="/diy" className={styles.mobileNavItem}>
            <div className={`${styles.mobileNavButton} ${activePage === "diy" ? styles.active : ""}`}>
              <FaPaintRoller size={24} />
            </div>
            <span className={`${styles.mobileNavLabel} ${styles.diy} ${activePage === "diy" ? styles.active : ""}`}>DIY</span>
          </Link>
        </nav>

        {/* Search */}
        <div className={styles.mobileSearchContainer}>
          <input type="text" placeholder="What will you explore today?" className={styles.searchInput} />
          <button className={styles.searchButton}>
            <FaMagnifyingGlass size={22} />
          </button>
        </div>
      </div>
    </header >
  )
}
