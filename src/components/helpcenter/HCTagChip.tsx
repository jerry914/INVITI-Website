import React from 'react';

interface HCTagChipProps {
  label: string;
  onClick?: () => void;
}

export const HCTagChip: React.FC<HCTagChipProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors leading-[140%]"
    >
      {label}
    </button>
  );
};
