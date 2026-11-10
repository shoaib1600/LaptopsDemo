import React from 'react'
import ImagesCard from './ImagesCard'
import styles from './css/Images.module.css'

export default function Images({ Images }) {
  return (
    <div className={styles.container}>
        {Images.map((elements)=>{
         return <ImagesCard image = {elements} />
        })}
    </div>
  );
}
