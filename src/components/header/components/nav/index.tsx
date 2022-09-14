import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li>
          <Link href={'/faq'}>
            <a>
              FAQ
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/refund'}>
            <a>
              Оплата и доставка
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>
              Возврат
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/study'}>
            <a>
              Исследования
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/log-in'}>
            <a>
              Личный кабинет
            </a>
          </Link>
        </li>
        <li>
          <Link href={'/about'}>
            <a>
              8 8 (800) 600-09-90
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
