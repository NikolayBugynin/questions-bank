import styles from './styles.module.css';

type Props = {
  onClick?: () => void;
  className?: string;
  text?: string;
  hideText?: boolean;
};

export const ThumbUpButton = ({
  className,
  onClick,
  text,
  hideText,
}: Props) => {
  return (
    <button
      type='button'
      className={`${styles.toggleBtn} ${className ?? ''}`}
      onClick={onClick}
      aria-label={text}
    >
      <svg className={styles.thumbUp} viewBox='0 0 21 19' aria-hidden='true'>
        <path
          fill='currentColor'
          d='m20.983 10.969-1.125-9A2.25 2.25 0 0 0 17.625 0H1.5A1.5 1.5 0 0 0 0 1.5v8.25a1.5 1.5 0 0 0 1.5 1.5h4.037l3.542 7.086a.75.75 0 0 0 .671.414A3.75 3.75 0 0 0 13.5 15v-1.5h5.25a2.25 2.25 0 0 0 2.233-2.531M5.25 9.75H1.5V1.5h3.75zm14.063 1.996a.74.74 0 0 1-.563.254h-6a.75.75 0 0 0-.75.75V15a2.25 2.25 0 0 1-1.808 2.207L6.75 10.323V1.5h10.875a.75.75 0 0 1 .744.656l1.125 9a.74.74 0 0 1-.181.59'
        />
      </svg>
      {!hideText && text && <span className={styles.buttonText}>{text}</span>}
    </button>
  );
};
