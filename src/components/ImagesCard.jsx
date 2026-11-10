import React from 'react'
import styles from './css/Images.module.css'

export default function ImagesCard({image}) {
  return (
    <div className={styles.card}>
        <img src={image.image} alt="" />
        <h1>{image.name}</h1>
        <p>{image.price} </p>
    </div>
  )
}
