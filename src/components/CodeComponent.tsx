// CodeComponent.tsx
import React, { useRef } from 'react';
import { FaClipboard } from 'react-icons/fa';


interface CodeProps {
  children: React.ReactNode;
}

const CodeComponent: React.FC<CodeProps> = ({ children }) => {
  const codeRef = useRef<HTMLModElement>(null);

  const handleCopyClick = () => {
    if (codeRef.current) {
      const range = document.createRange();
      range.selectNode(codeRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
    }
  };

  return (
    <div>
      <br/>
      <code className='code-block'
        ref={codeRef}
        style={{
          fontFamily: '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
          lineHeight: 'normal',
          background: 'rgba(135, 131, 100, 0.15)',
          color: '#FAF9F6',
          borderRadius: '4px',
          fontSize: '90%',
          padding: '0.2em 0.4em',
          display: 'block', // Make the code block a block element
        }}
      >
        {children}
        <button onClick={handleCopyClick} className='copy-clipboard'>
          <FaClipboard />
        </button>

        <br /></code><br />
    </div>
  );
};

export default CodeComponent;


