import styles from "./Select.module.scss";

import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
function Select({
  value,
  id,
  onChange,
  options,
  selectAll,
  showSelectAll,
  selectionLimit,
  placeholder,
  width,
  skeleton = false,
  className,
  style,
  optionLabel,
}) {
  return !skeleton ? (
    <div
      className={`${styles.SelectWrapper} ${className}`}
      style={{ width: width, ...style }}
    >
      <Dropdown
        id={id}
        className={styles.Select}
        value={value}
        optionLabel={optionLabel}
        placeholder={placeholder}
        selectAll={selectAll}
        showSelectAll={showSelectAll}
        selectionLimit={selectionLimit}
        options={options}
        onChange={onChange}
        filter
        // filterTemplate={filterTemplate}
        emptyFilterMessage="Sin resultados"
      />
    </div>
  ) : (
    <Skeleton width={width || "100%"} height="34px" />
  );
}

export default Select;
