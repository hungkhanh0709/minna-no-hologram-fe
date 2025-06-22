"use client"

import Link from "next/link"
import { useRef } from "react"
import styles from "./header.module.scss"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  FaFlask,
  FaHourglassEnd,
  FaHouse,
  FaMagnifyingGlass,
  FaMasksTheater,
  FaPaintRoller,
} from "react-icons/fa6"

interface HeaderProps {
  activePage?: "home" | "science" | "history" | "culture" | "diy" | ""
  className?: string
}

export function Header({ activePage = "home", className = "" }: HeaderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const mobileSearchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    const query =
      searchInputRef.current?.value?.trim() ||
      mobileSearchInputRef.current?.value?.trim() ||
      ""
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <header className={`${styles.header} ${className}`}>
      {/* Desktop Layout */}
      <div className={styles.desktopHeader}>
        {/* Logo + Navigation */}
        <div className={styles.logoNavWrapper}>
          <div className={styles.logo}>
            <Image width={133} height={53} src="/images/logo.svg" alt="Logo" />
          </div>

          <nav className={styles.navigation}>
            <NavLink href="/" label="HOME" icon={<FaHouse size={24} />} active={activePage === "home"} />
            <NavLink href="/science" label="SCIENCE" icon={<FaFlask size={24} />} active={activePage === "science"} />
            <NavLink href="/history" label="HISTORY" icon={<FaHourglassEnd size={24} />} active={activePage === "history"} />
            <NavLink href="/culture" label="CULTURE" icon={<FaMasksTheater size={24} />} active={activePage === "culture"} />
            <NavLink href="/diy" label="DIY" icon={<FaPaintRoller size={24} />} active={activePage === "diy"} extraClass={styles.diy} />
          </nav>
        </div>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className={styles.searchContainer}>
          <input
            ref={searchInputRef}
            type="text"
            name="q"
            placeholder="What will you explore today?"
            className={styles.searchInput}
            defaultValue=""
          />
          <button type="submit" className={styles.searchButton}>
            <FaMagnifyingGlass size={22} />
          </button>
        </form>
      </div>

      {/* Mobile Layout */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileLogoContainer}>
          <div className={styles.logo}>
            <Image width={133} height={53} src="/images/logo.svg" alt="Logo" />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className={styles.mobileNavigation}>
          <MobileNavLink href="/" icon={<FaHouse size={24} />} label="Home" active={activePage === "home"} />
          <MobileNavLink href="/science" icon={<FaFlask size={24} />} label="Science" active={activePage === "science"} />
          <MobileNavLink href="/history" icon={<FaHourglassEnd size={24} />} label="History" active={activePage === "history"} />
          <MobileNavLink href="/culture" icon={<FaMasksTheater size={24} />} label="Culture" active={activePage === "culture"} />
          <MobileNavLink href="/diy" icon={<FaPaintRoller size={24} />} label="DIY" active={activePage === "diy"} extraClass={styles.diy} />
        </nav>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className={styles.mobileSearchContainer}>
          <input
            ref={mobileSearchInputRef}
            type="text"
            name="q"
            placeholder="What will you explore today?"
            className={styles.searchInput}
            defaultValue=""
          />
          <button type="submit" className={styles.searchButton}>
            <FaMagnifyingGlass size={22} />
          </button>
        </form>
      </div>
    </header>
  )
}

function NavLink({ href, label, icon, active, extraClass = "" }: { href: string, label: string, icon: React.ReactNode, active: boolean, extraClass?: string }) {
  return (
    <Link href={href} className={`${styles.navItem} ${active ? styles.active : ""} ${extraClass}`}>
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function MobileNavLink({ href, icon, label, active, extraClass = "" }: { href: string, icon: React.ReactNode, label: string, active: boolean, extraClass?: string }) {
  return (
    <Link href={href} className={styles.mobileNavItem}>
      <div className={`${styles.mobileNavButton} ${active ? styles.active : ""}`}>
        {icon}
      </div>
      <span className={`${styles.mobileNavLabel} ${active ? styles.active : ""} ${extraClass}`}>
        {label}
      </span>
    </Link>
  )
}
