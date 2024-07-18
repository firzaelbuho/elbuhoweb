"use client"

import React, { useState } from 'react';

const languages = ['TypeScript', 'Kotlin', 'Java', 'Python', 'JavaScript'];

const generateCode = (json: any, language: string) => {
  let parsedJson;
  try {
    parsedJson = typeof json === 'string' ? JSON.parse(json) : json;
  } catch (error) {
    return 'Invalid JSON';
  }

  if (Array.isArray(parsedJson)) {
    parsedJson = parsedJson[0]; // Ambil objek pertama jika JSON berupa array
  }

  switch (language) {
    case 'TypeScript':
      return generateTypeScript(parsedJson);
    case 'Kotlin':
      return generateKotlin(parsedJson);
    case 'Java':
      return generateJava(parsedJson);
    case 'Python':
      return generatePython(parsedJson);
    case 'JavaScript':
      return generateJavaScript(parsedJson);
    default:
      return '';
  }
};

const generateTypeScript = (json: any, className = 'Model') => {
  let result = `interface ${className} {\n`;
  for (const key in json) {
    const value = json[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const nestedClassName = `${capitalizeFirstLetter(key)}`;
      result += `  ${key}: ${nestedClassName};\n`;
      result += generateTypeScript(value, nestedClassName);
    } else {
      const type = Array.isArray(value) ? 'any[]' : typeof value;
      result += `  ${key}: ${type};\n`;
    }
  }
  result += '}\n';
  return result;
};

const generateKotlin = (json: any, className = 'Model') => {
  let result = `data class ${className}(\n`;
  for (const key in json) {
    const value = json[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const nestedClassName = `${capitalizeFirstLetter(key)}`;
      result += `  val ${key}: ${nestedClassName},\n`;
      result += generateKotlin(value, nestedClassName);
    } else {
      const type = mapKotlinType(Array.isArray(value) ? 'array' : typeof value);
      result += `  val ${key}: ${type},\n`;
    }
  }
  result = result.trim().replace(/,$/, '');
  result += '\n)\n';
  return result;
};

const generateJava = (json: any, className = 'Model') => {
  let result = `public class ${className} {\n`;
  for (const key in json) {
    const value = json[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const nestedClassName = `${capitalizeFirstLetter(key)}`;
      result += `  private ${nestedClassName} ${key};\n`;
      result += generateJava(value, nestedClassName);
    } else {
      const type = mapJavaType(Array.isArray(value) ? 'array' : typeof value);
      result += `  private ${type} ${key};\n`;
    }
  }
  result += '}\n';
  return result;
};

const generatePython = (json: any, className = 'Model') => {
  let result = `class ${className}:\n`;
  for (const key in json) {
    const value = json[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const nestedClassName = `${capitalizeFirstLetter(key)}`;
      result += `  ${key}: ${nestedClassName}\n`;
      result += generatePython(value, nestedClassName);
    } else {
      result += `  ${key}: ${typeof value}\n`;
    }
  }
  result += '\n';
  return result;
};

const generateJavaScript = (json: any, className = 'Model') => {
  let result = `class ${className} {\n`;
  for (const key in json) {
    const value = json[key];
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      const nestedClassName = `${capitalizeFirstLetter(key)}`;
      result += `  ${key};\n`;
      result += generateJavaScript(value, nestedClassName);
    } else {
      result += `  ${key};\n`;
    }
  }
  result += '}\n';
  return result;
};

const mapKotlinType = (type: string) => {
  switch (type) {
    case 'string':
      return 'String';
    case 'number':
      return 'Int';
    case 'boolean':
      return 'Boolean';
    case 'array':
      return 'List<Any>';
    default:
      return 'Any';
  }
};

const mapJavaType = (type: string) => {
  switch (type) {
    case 'string':
      return 'String';
    case 'number':
      return 'int';
    case 'boolean':
      return 'boolean';
    case 'array':
      return 'List<Object>';
    default:
      return 'Object';
  }
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Page: React.FC = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [language, setLanguage] = useState('TypeScript');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => {
    const code = generateCode(jsonInput, language);
    setGeneratedCode(code);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">POJO Generator</h1>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="jsonInput">JSON Input:</label>
        <textarea
          id="jsonInput"
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter JSON"
          rows={10}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="language">Select Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border p-2 w-full"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
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
