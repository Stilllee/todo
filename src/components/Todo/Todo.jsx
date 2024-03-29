import React from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newStatus = status === "completed" ? "active" : "completed";
      onUpdate({ ...todo, status: newStatus });
    }
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <label
        className={`${styles.text} ${
          status === "completed" ? styles.completed : ""
        }`}
        htmlFor={id}
      >
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <MdDeleteForever />
        </button>
      </span>
    </li>
  );
}
