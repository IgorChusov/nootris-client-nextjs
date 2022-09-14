import React from 'react'
import Image from 'next/image'
import cn from 'classnames'
import styles from './styles.module.scss'

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>
        Получи защиту иммунитета<br/>
        <span>со скидкой -15% первым!</span>
      </h2>
      <div className={styles.priceContainer}>
        <span className={cn(styles.textPrice, styles.textPriceOld)}> 750&#8381; </span>
        <span className={cn(styles.textPrice, styles.textPriceNew)}>690&#8381;</span>
      </div>
      <div className={styles.containerDescription}>
        <div className={styles.imgGroup}>
          <div className={styles.first}>
            <Image 
              src="/assets/images/ginger.png" 
              width={193} 
              height={170} 
              alt="Tables and lemon" 
            />
          </div>
          <div className={styles.second}>
            <Image 
              src="/assets/images/nootris.png" 
              width={480} 
              height={160} 
              alt="Tables and lemon" 
            />
          </div>
          <div className={styles.third}>
            <Image 
              src="/assets/images/vorus.png" 
              width={192} 
              height={160} 
              alt="Tables and lemon" 
            />
          </div> 
        </div>
        <div className={styles.description}>
          <span className={styles.textDescriptionLittle}>Содержит<br/><span>имбирь</span></span>
          <span className={styles.textDescriptionBig}>+ Бесплатная доставка<br/><span>Специальная цена</span></span>
          <span className={styles.textDescriptionLittle}>Нейтрализует<br/><span>вирусы</span></span>
        </div>
      </div>
      <button className={styles.btn}>Оформить заказ!</button>
    </div>
  )
}

export default Content