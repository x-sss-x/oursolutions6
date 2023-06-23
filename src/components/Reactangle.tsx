//@ts-nocheck
import React, { useState } from 'react';

const Rectangle = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    const text = event.target.value;
    const words = text.trim().split(/\s+/);
    const truncatedWords = words.slice(0, 250);
    const truncatedText = truncatedWords.join(' ');
    setInputText(truncatedText);
  };

  const wordCount = inputText.trim().split(/\s+/).length;

  return (
    <div className="relative h-[323px] w-[468px] rounded-[10px] bg-description ">
      <textarea
        className="absolute inset-0 w-full h-full p-4 rounded-10px bg-transparent text-gray-400 resize-none"
        placeholder="Describe your experience..."
        value={inputText}
        onChange={handleChange}
      />
      <p className="absolute bottom-4 right-4 text-gray-400">
        {wordCount}/300 words
      </p>
    </div>
  );
};

export default Rectangle;