import React from "react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NewCheckbox: React.FC<CheckboxProps> = ({ id, checked, onChange }) => (
  <input
    type="checkbox"
    id={id}
    checked={checked}
    onChange={onChange}
    className="checkbox-class"
  />
);

export default NewCheckbox;
