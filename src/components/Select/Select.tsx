import styles from "./Select.module.scss";
import ReactSelect, { ContainerProps, GroupBase } from "react-select";
import { ISelect } from "../../types";
import { CaretDownOutlined } from "@ant-design/icons";

const DropdownIndicator = () => (
  <CaretDownOutlined className={styles.selectIcon} />
);

export default function Select({
  label,
  placeholder,
  options,
  value,
  onChange,
  isClearable,
  ...rest
}: ISelect) {
  return (
    <ReactSelect
      placeholder={placeholder}
      openMenuOnFocus
      value={options.filter((e) => e.value === value)}
      isClearable={isClearable}
      onChange={onChange}
      menuPortalTarget={document.body}
      options={options}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
        SelectContainer: (
          props: ContainerProps<unknown, boolean, GroupBase<unknown>>
        ) => {
          return (
            <div {...rest} className={styles.container}>
              <span className={styles.label}>{label}</span>
              {props.children}
            </div>
          );
        },
      }}
      styles={{
        container: (baseStyle) => ({
          ...baseStyle,
          width: "100%",
        }),
        control: (baseStyles) => ({
          ...baseStyles,
          border: "none",
          padding: "8px 0",
          boxShadow: "none",
          width: "100%",
          cursor: "pointer",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          width: "305px",
          padding: "12px 0",
          borderRadius: "8px",
          marginTop: "15px",
          left: "-4.5em",
        }),
        option: (baseStyles, state) => {
          let color = "#000";
          let backgroundColor = "white";
          if (state.isFocused) {
            backgroundColor = "rgba(236, 127, 7, 0.1)";
          }

          if (state.isSelected) {
            backgroundColor = "#EC7F07";
            color = "white";
          }

          return {
            ...baseStyles,
            backgroundColor,
            color,
            ":active": {
              backgroundColor: "#EC7F07",
              color: "white",
            },
          };
        },
      }}
    />
  );
}
