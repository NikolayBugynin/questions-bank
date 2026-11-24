import type { QuizAnswer } from '../../helpers/storage/quizAnswers';
import type { Question } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  questions: Question[];
  answers: Record<string, QuizAnswer>;
  total: number;
}

export const StatsColumn = ({ questions, answers, total }: Props) => {
  const answeredCount = questions.filter((q) => answers[String(q.id)]).length;
  const knowCount = questions.filter((q) => answers[String(q.id)]?.know).length;
  const dontKnowCount = answeredCount - knowCount;
  const newCount = total - answeredCount;

  const answeredPercent = total ? Math.round((answeredCount / total) * 100) : 0;

  const radius = 100; // (240 - 2*20) / 2 = 100 (при strokeWidth 20)
  const circumference = 2 * Math.PI * radius; // длина окружности
  const offset = circumference * (1 - answeredPercent / 100); // сколько «скрыть»
  return (
    <div className={styles.content}>
      <div className={styles.questionStats}>
        <h4 className={styles.title}>Статистика пройденных вопросов</h4>
        <div
          className={styles.chartPlaceholder}
          role='img'
          aria-label={`Изучено ${answeredPercent}%`}
        >
          <svg width='240' height='240' viewBox='0 0 240 240'>
            {/* жёлтый фон-кольцо */}
            <circle
              cx='120'
              cy='120'
              r={radius}
              fill='none'
              stroke='#FFE7AE'
              strokeWidth='20'
            />
            {/* зелёная дуга с закруглёнными концами */}
            <circle
              cx='120'
              cy='120'
              r={radius}
              fill='none'
              stroke='#008616'
              strokeWidth='20'
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap='round' /* ← скругление концов */
              transform='rotate(-90 120 120)' /* старт сверху */
              style={{ transition: 'stroke-dashoffset 0.6s ease' }}
            />
          </svg>
          <div className={styles.chartHole}>
            <span>{answeredPercent}%</span>
            <span>Изученно</span>
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.infoBox}>
            <span className={styles.statItem}>Всего</span>
            <span className={styles.statValue}>{total}</span>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.statItem}>Новые</span>
            <span className={styles.newCount}>{newCount}</span>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.statItem}>В процессе</span>
            <span className={styles.statValue}>{dontKnowCount}</span>
          </div>
          <div className={styles.infoBox}>
            <span className={styles.statItem}>Изучено</span>
            <span className={styles.statValue}>{knowCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
