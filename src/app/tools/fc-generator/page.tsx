"use client"

import React, { useState } from 'react';

const Page: React.FC = () => {
  const [componentName, setComponentName] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => {
    const code = `
import React from 'react';
import classNames from 'classnames';

interface ${componentName}Props {
  
}

const ${componentName}: React.FC<${componentName}Props> = ({  }) => {
  const ${componentName.toLowerCase()}Class = classNames({
    
  });

  return (
    <div>
      {/* ${componentName} content here */}
    </div>
  );
};

export default ${componentName};
`;
    setGeneratedCode(code);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Generate React Component</h1>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="componentName">Component Name:</label>
        <input
          id="componentName"
          type="text"
          value={componentName}
          onChange={(e) => setComponentName(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter component name"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate
      </button>
      {generatedCode && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Generated Code:</h2>
          <textarea
            readOnly
            value={generatedCode}
            className="w-full h-64 border p-2"
          />
        </div>
      )}
    </div>
  );
};

export default Page;
