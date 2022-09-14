import React, { useState } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './components/nav'

const Header: React.FC = () => {
  const [amount, setAmount] = useState(1)
  const [viewMenu, setViewMenu] = useState(false)

  return (
    <header className={styles.header}>
      <button onClick={()=> setViewMenu(prevState => !prevState)} className={styles.burger}>
        <svg width="43" height="36" viewBox="0 0 43 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.96997 18H37.47" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.96997 7.5H37.47" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.96997 28.5H37.47" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={styles.logo}>
        <Image 
          src="/assets/images/icons/logo.svg" 
          width={120} 
          height={35} 
          alt="Logo" 
        />
      </div>
      <div className={styles.navFull}>
        <Nav />
      </div>
      {viewMenu && (
        <div className={styles.navMobile}>
          <Nav />
        </div>
        )
      }
      <button className={styles.btnBasket}>
        <Image 
          src="/assets/images/icons/basket.svg" 
          width={32} 
          height={32} 
          alt="Logo" 
        />
        <span className={styles.amount}>{amount}</span>
      </button>
    </header>
  )
}

export default Header
