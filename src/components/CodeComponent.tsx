// CodeComponent.tsx
import React from 'react';

interface CodeProps {
  children: React.ReactNode;
}

const CodeComponent: React.FC<CodeProps> = ({ children }) => (
  <code
    style={{
      fontFamily: '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
      lineHeight: 'normal',
      background: 'rgba(135, 131, 120, 0.15)',
      color: '#EB5757',
      borderRadius: '4px',
      fontSize: '85%',
      padding: '0.2em 0.4em',
    }}
  >
    {children}
  </code>
);

export default CodeComponent;

