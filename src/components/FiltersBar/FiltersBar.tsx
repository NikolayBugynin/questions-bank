import { useState } from 'react';
import type { Skill } from '../../api/skills';
import closeBtn from '../../assets/images/close_btn.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import { useSkills } from '../../hooks/useSkills';
import {
  useSpecializations,
  type Specialization,
} from '../../hooks/useSpecializations';
import './FiltersBar.css';

interface FiltersBarProps {
  searchValueByTitle: string;
  setSelectedSpecialization: React.Dispatch<
    React.SetStateAction<Specialization | null>
  >;
  setSelectedSkill: React.Dispatch<React.SetStateAction<Skill | null>>;
  selectedSpecialization: Specialization | null;
  selectedSkill: Skill | null;
  selectedComplexity: number[];
  handleSearchChange: (value: string) => void;
  setSelectedComplexity: React.Dispatch<React.SetStateAction<number[]>>;
  selectedRate: number[];
  setSelectedRate: React.Dispatch<React.SetStateAction<number[]>>;
  isOpenFilterBar: boolean;
  setIsOpenFilterBar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FiltersBar = ({
  searchValueByTitle,
  handleSearchChange,
  setSelectedSpecialization,
  selectedSpecialization,
  selectedSkill,
  setSelectedSkill,
  setSelectedComplexity,
  selectedComplexity,
  selectedRate,
  setSelectedRate,
  isOpenFilterBar,
  setIsOpenFilterBar,
}: FiltersBarProps) => {
  //SpecializationsData
  const [showAllSpecializations, setShowallSpecializations] = useState(false);

  const { specializations } = useSpecializations();

  const toggleSpecialization = (specialization: Specialization) => {
    setSelectedSpecialization((prev) =>
      prev?.id === specialization.id ? null : specialization,
    );
  };

  const visibleSpecializations = showAllSpecializations
    ? specializations
    : specializations.slice(0, 5);

  const hasMoreSpecializations = specializations.length > 5;

  const specializationIds = selectedSpecialization
    ? [selectedSpecialization.id]
    : [];

  //SkillsData
  const [showAllSkills, setShowallSkills] = useState(false);

  const { skills } = useSkills(specializationIds);

  // console.log('spec for skills', selectedSpecialization);

  // console.log('-skills', skills);

  const toggleSkill = (skill: Skill) => {
    setSelectedSkill((prev) => (prev?.id === skill.id ? null : skill));
  };

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 8);

  const hasMoreSkills = skills.length > 8;

  const toggleComplexity = (rangeValues: number[]) => {
    setSelectedComplexity((prev: number[]) => {
      // Проверяем, все ли числа из диапазона уже выбраны
      const allSelected = rangeValues.every((num) => prev.includes(num));

      if (allSelected) {
        // Если выбраны - удаляем
        return prev.filter((num) => !rangeValues.includes(num));
      } else {
        // Если не все - добавляем недостающие
        const newSelection = [...prev];
        rangeValues.forEach((num) => {
          if (!newSelection.includes(num)) {
            newSelection.push(num);
          }
        });
        return newSelection.sort((a, b) => a - b);
      }
    });
  };

  const toggleRate = (rateValue: number) => {
    setSelectedRate((prev: number[]) => {
      if (prev.includes(rateValue)) {
        return prev.filter((item) => item !== rateValue);
      } else {
        return [...prev, rateValue].sort((a, b) => a - b);
      }
    });
  };

  const complexityMap: Record<string, number[]> = {
    '1-3': [1, 2, 3],
    '4-6': [4, 5, 6],
    '7-8': [7, 8],
    '9-10': [9, 10],
  };

  return (
    <div className={`filtersBar ${isOpenFilterBar ? 'open' : ''}`}>
      <button
        onClick={() => setIsOpenFilterBar(false)}
        className='filtersBar-closeBtn'
      >
        <img src={closeBtn} alt='' />
      </button>
      <div className='filtersBar__content'>
        <div className='search__container'>
          <img className='search__icon' src={searchIcon} alt='' />
          <input
            type='text'
            className='search__input'
            placeholder='Введите запрос…'
            value={searchValueByTitle}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Специализация</h4>
          <div className='filters__items-list'>
            {visibleSpecializations.map((specialization) => (
              <button
                key={specialization.id}
                className={`filters__item ${selectedSpecialization?.id === specialization?.id ? 'active' : ''}`}
                onClick={() => toggleSpecialization(specialization)}
              >
                {specialization.title}
              </button>
            ))}
          </div>

          {hasMoreSpecializations && (
            <button
              className='filters__toggle'
              onClick={() => setShowallSpecializations(!showAllSpecializations)}
            >
              {showAllSpecializations ? 'Скрыть' : ' Посмотреть все'}
            </button>
          )}
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Навыки</h4>
          <div className='filters__items-list'>
            {visibleSkills.map((skill) => (
              <button
                key={skill.id}
                className={`filters__item ${selectedSkill?.id === skill?.id ? 'active' : ''}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill.title}
              </button>
            ))}
          </div>
          {hasMoreSkills && (
            <button
              className='filters__toggle'
              onClick={() => setShowallSkills(!showAllSkills)}
            >
              {showAllSkills ? 'Скрыть' : 'Посмотреть все'}
            </button>
          )}
        </div>
        {/* complexity */}
        <div className='filters__items'>
          <h4 className='filters__items-title'>Уровень сложности</h4>
          <ul className='filters__items-list'>
            {Object.entries(complexityMap).map(([range, complexity]) => {
              const isActive = complexity.every((num) =>
                selectedComplexity.includes(num),
              );

              return (
                <button
                  key={range}
                  className={`filters__item ${isActive ? 'active' : ''}`}
                  onClick={() => toggleComplexity(complexity)}
                >
                  {range}
                </button>
              );
            })}
          </ul>
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Рейтинг</h4>
          <ul className='filters__items-list'>
            {[1, 2, 3, 4, 5].map((rate) => {
              const isActive = selectedRate.includes(rate);
              return (
                <button
                  key={rate}
                  className={`filters__item ${isActive ? 'active' : ''}`}
                  onClick={() => toggleRate(rate)}
                >
                  {rate}
                </button>
              );
            })}
          </ul>
        </div>
        <div className='filters__items'>
          <h4 className='filters__items-title'>Статус</h4>
          <ul className='filters__items-list'>
            {['Изученные', 'Не изученные', 'Все'].map((status) => (
              <button key={status} className='filters__item'>
                {status}
              </button>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
