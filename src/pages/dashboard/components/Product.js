import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../stylesheets/product.module.sass'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Product({ title, color, price }) {
  return (
    <Card
      className={`${styles.card} p-2`}
      style={{ height: '100%' }}
    >
      <Card.Img className={styles.image}
        variant="top"
        src={'https://placekitten.com/333/500/?image=' + getRandomIntInclusive(1, 16)} />

      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <div className={styles.subtitle}>
            {price}
          </div>
        </Card.Subtitle>
        <Card.Text className={styles.color}>
          {color}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
