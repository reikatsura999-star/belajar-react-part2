// App.tsx
import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/ErrorBuggy';

export default function App() {
  return (
    <ErrorBoundary
      fallback={
        <div style={{ padding: 20 }}>
          <h1>⚠️ Oops!</h1>
          <p>Ada error di aplikasi. Santai, masih bisa lanjut 😎</p>
        </div>
      }
    >
      <BuggyComponent />
    </ErrorBoundary>
  );
}