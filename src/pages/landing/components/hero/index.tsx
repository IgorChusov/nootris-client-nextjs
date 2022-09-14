import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

const Hero: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Активируй иммунитет!</h1>
      <p className={styles.text}>
        Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма
      </p>
      <h3>Nootris помогает</h3>
      <p className={styles.subText}>Вашему организму во время пандемии и сезонных простуд</p>
      <div className={styles.backgroundImg}>
        <Image 
          src="/assets/images/hero-img.png" 
          width={816} 
          height={984} 
          alt="Tables and lemon" 
        />
      </div>
    </div>
  )
}

export default Hero