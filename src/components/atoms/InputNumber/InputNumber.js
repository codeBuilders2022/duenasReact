import React, { useEffect, useState } from "react";

import { Skeleton } from "primereact/skeleton";

// styles
import styles from "./InputNumber.module.scss";

const ALLOWED_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Backspace",
  "ArrowRight",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  ".",
  "Control",
  "v",
];
const ALLOWED_KEYS_NOT_DOTS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "Backspace",
  "ArrowRight",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
];

function inputNumber({
  // limit, <- deprecated prop
  // decimalsCuanity = 0, <- deprecated prop
  id,
  name,
  value,
  onChange,
  placeholder,
  title,
  className,
  disabled,
  width,
  hideRequired,
  onClick,
  style,
  titleClass,
  inputClassName = "",
  notPoint = false,

  skeleton,
  onKeyDown,
  onBlur,
}) {
  return !skeleton ? (
    <>
      <div
        className={`${styles.cjInputTextPassword} ${className}`}
        style={{ width: width }}
        onClick={() => onClick && onClick()}
      >
        <div className={styles.topContainer}>
          <div className={`${styles.title} ${titleClass}`}>{title}</div>
        </div>
        {
          <div className={`${styles.inputWrappernumber}`}>
            <input
              type={"number"}
              disabled={disabled}
              id={id}
              name={name}
              value={value}
              max="9999"
              min={"0"}
              onChange={(e) => {
                onChange(e);
              }}
              onKeyDown={(e) => {
                if (onKeyDown) {
                  onKeyDown(e);
                }

                if (!ALLOWED_KEYS.includes(e.key) && !notPoint) {
                  e.preventDefault();
                }
                if (!ALLOWED_KEYS_NOT_DOTS.includes(e.key) && notPoint) {
                  e.preventDefault();
                }
              }}
              className={`input ${inputClassName}`}
              placeholder={placeholder}
              onBlur={onBlur}
            />
          </div>
        }
      </div>
    </>
  ) : (
    <Skeleton width={width || "100%"} height="73px" />
  );
}

export default inputNumber;
