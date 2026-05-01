import styles from './styles.module.css';

export const FooterInfo = () => {
  return (
    <>
      <h3 className={styles.title}>
        Выбери, каким будет IT завтра, вместе с нами
      </h3>
      <p className={styles.description}>
        YeaHub — это полностью открытый проект, призванный объединить и улучшить
        IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн
        проекта также открыт для ознакомления в Figma.
      </p>
    </>
  );
};
