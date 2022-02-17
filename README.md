# ts-unit-test

Simple project with an example setup for unit testing Typescript code.

# Summary of steps for project scaffolding

### 1. Install dependencies

`npm install --save-dev @types/jest @types/node jest ts-jest typescript`

### 2. Create jest.config.jsfile

Root folder: src/
Test files: any files ending with `.spec.ts` or `.test.ts`

```
module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
```

### 3. Create tsconfig.json file

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es2015"],
    "strict": true,
    "declaration": true,
    "outDir": "dist",
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### 4. Add test script to package.json file

```
"scripts": {
    "test": "jest"
 },
```
