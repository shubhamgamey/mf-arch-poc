import { ReactNode } from 'react';
import styles from './card.module.scss';

export interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <h1>{props.title}</h1>
      <div className={styles.info}>{props.children}</div>
      <p className={styles.desc}>{props.description}</p>
    </div>
  );
}

export default Card;
