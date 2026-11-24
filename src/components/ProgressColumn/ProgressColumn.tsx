import { useMemo } from 'react';
import type { QuizAnswer } from '../../helpers/storage/quizAnswers';
import type { Question } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
  questions: Question[];
  answers: Record<string, QuizAnswer>;
}

export const ProgressColumn = ({ questions, answers }: Props) => {
  const skillStats = useMemo(() => {
    const map = new Map<
      number,
      {
        id: number;
        title: string | undefined;
        total: number;
        answered: number;
      }
    >();

    for (const question of questions) {
      for (const skill of question.questionSkills ?? []) {
        const entry = map.get(skill.id) ?? {
          id: skill.id,
          title: skill.title,
          total: 0,
          answered: 0,
        };
        entry.total += 1;
        if (answers[String(question.id)]) entry.answered += 1;
        map.set(skill.id, entry);
      }
    }

    return Array.from(map.values());
  }, [questions, answers]);

  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Прогресс обучения по навыкам</h4>
      <ul className={styles.container}>
        {skillStats.map((skill) => {
          const percent = skill.total
            ? Math.round((skill.answered / skill.total) * 100)
            : 0;

          return (
            <li key={skill.id} className={styles.progressBox}>
              <div className={styles.text}>
                <span>{skill.title}</span>
                <span className={styles.counter}>
                  {skill.answered}/{skill.total}
                </span>
              </div>

              <div
                className={styles.progress}
                role='progressbar'
                aria-valuenow={percent}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className={styles.progressBar}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
