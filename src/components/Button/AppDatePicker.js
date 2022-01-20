import React, { useEffect, useRef } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import "./AppDatePicker.scss";

const AppDatePicker = ({ onChange, placeholder, value, disabled, minDate, lang }) => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.flatpickr.altInput.disabled = disabled;
  }, [disabled]);

  return (
    <Flatpickr
      ref={inputRef}
      key={lang}
      style={{ marginTop: "18px" }}
      placeholder={placeholder}
      value={value}
      className="form-control m-0"
      options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" ,minDate : minDate , locale: lang}}
      onChange={onChange}
    />
  );
};

export default AppDatePicker;
