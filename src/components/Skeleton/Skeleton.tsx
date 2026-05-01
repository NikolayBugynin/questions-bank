import styles from './styles.module.css';

interface Props {
  count?: number;
}

export const Skeleton = ({ count = 10 }: Props) => {
  return (
    <>
      <ul className={styles.list}>
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className={styles.item}
            aria-label='Загрузка контента'
          ></li>
        ))}
      </ul>
    </>
  );
};
