
import React from 'react';

interface SelectFieldProps {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  required = false,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col mb-8 w-full">
      <label className="text-sm font-medium mb-1 text-gray-700">
        {label}{required && <span className="text-acc-gold ml-1">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="border-b border-gray-300 py-2 bg-transparent transition-colors duration-200 focus:border-acc-gold text-base appearance-none cursor-pointer"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
