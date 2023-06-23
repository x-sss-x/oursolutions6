//@ts-nocheck
import React from 'react';

interface ButtonProps {
  text: string;
  pcWidth?: string;
  pcHeight?: string;
  textSize?: string;
}

const Button: React.FC<ButtonProps> = ({ text, pcWidth, pcHeight, textSize }) => {
  const buttonStyle = {
    width: pcWidth || '500px',
    height: pcHeight || '377px',
    fontSize: textSize || '16px',
  };

  return (
    <button
      className="w-500 h-377 bg-stone-200 border-sky-600 border-2 rounded-xl font-bold text-neutral-400 p-3"
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default Button;