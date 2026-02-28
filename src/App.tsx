import { useState } from 'react';
import type { Skill } from './api/skills';
import './App.css';
import { FiltersBar } from './components/FiltersBar/FiltersBar';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useDebounce } from './hooks/useDebounce';
import type { Specialization } from './hooks/useSpecializations';
import { Main } from './pages/Main/Main';

function App() {
  const [isOpenFilterBar, setIsOpenFilterBar] = useState(false);

  const [searchValueByTitle, setSearchValueByTitle] = useState('');

  const debouncedSearchText = useDebounce(searchValueByTitle, 1500);

  const [selectedSpecialization, setSelectedSpecialization] =
    useState<Specialization | null>(null);

  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const [selectedComplexity, setSelectedComplexity] = useState<number[]>([]);

  const [selectedRate, setSelectedRate] = useState<number[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (value: string) => {
    setSearchValueByTitle(value);
    setCurrentPage(1); // Сбрасываем на первую страницу при новом поиске
  };

  return (
    <>
      <Header />
      <div className='app-content'>
        <Main
          setIsOpenFilterBar={setIsOpenFilterBar}
          searchValueByTitle={debouncedSearchText}
          selectedSpecialization={selectedSpecialization}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          selectedSkill={selectedSkill}
          selectedComplexity={selectedComplexity}
          selectedRate={selectedRate}
        />
        <FiltersBar
          setIsOpenFilterBar={setIsOpenFilterBar}
          isOpenFilterBar={isOpenFilterBar}
          handleSearchChange={handleSearchChange}
          searchValueByTitle={searchValueByTitle}
          setSelectedSpecialization={setSelectedSpecialization}
          setSelectedSkill={setSelectedSkill}
          selectedSpecialization={selectedSpecialization}
          selectedSkill={selectedSkill}
          setSelectedComplexity={setSelectedComplexity}
          selectedComplexity={selectedComplexity}
          selectedRate={selectedRate}
          setSelectedRate={setSelectedRate}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
