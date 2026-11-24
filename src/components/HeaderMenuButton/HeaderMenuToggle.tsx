import { ExpandButton } from '../ExpandButton/ExpandButton';
import styles from './styles.module.css';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export const HeaderMenuToggle = ({ onClick, isOpen }: Props) => {
  return (
    <>
      <button type='button' onClick={onClick} className={styles.menuBtn}>
        Подготовка
      </button>
      <ExpandButton onClick={onClick} isOpen={isOpen} />
    </>
  );
};
