import React from "react";
import styles from "./Header.module.css";
import { useDarkMode } from "../../context/DarkModeContext";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function Header({ filters, filter, onFilterChange }) {
  const filterTranslations = {
    all: "전체",
    active: "진행 중",
    completed: "완료",
  };
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button
        className={styles.toggle}
        onClick={toggleDarkMode}
        aria-label="다크 모드 전환"
      >
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFilterChange(value)}
            >
              {filterTranslations[value]}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
