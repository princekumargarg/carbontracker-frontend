import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Input({ type, placeholder, value, onChange, className }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded-md ${className}`}
      />
    );
  }
