
import React from 'react';

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex flex-col mb-8 w-full">
      <label className="text-sm font-medium mb-1 text-gray-700">
        {label}{required && <span className="text-acc-gold ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="border-b border-gray-300 py-2 bg-transparent transition-colors duration-200 focus:border-acc-gold placeholder:text-gray-300 text-base"
      />
    </div>
  );
};
