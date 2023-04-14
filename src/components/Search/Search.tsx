import styles from "./Search.module.scss";
import { ISearchInput } from "../../types";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";

export default function SearchInput({
  onChange,
  onClick,
  onEnter,
  disabled,
  isLoading,
  value,
  hideButton,
}: ISearchInput) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.inputIcon}>{<SearchOutlined />}</div>
        <input
          value={value}
          placeholder={"Search..."}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onEnter && onEnter();
            }
          }}
          disabled={disabled}
          onChange={(e) => onChange && onChange(e.target.value)}
          className={styles.input}
        />
        <div className={styles.inputButton}>
          {hideButton ? undefined : (
            <button
              onClick={onClick}
              disabled={disabled}
              type="button"
              className={styles.button}
            >
              {isLoading ? <LoadingOutlined /> : "Search"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
