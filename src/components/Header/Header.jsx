import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  const filterTranslations = {
    all: "전체",
    active: "진행 중",
    completed: "완료",
  };
  return (
    <header className={styles.header}>
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
