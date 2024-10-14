import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './pages/App';
//import StudyGroup from './pages/StudyGroup';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// /*const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         {/* 초기 경로를 StudyGroup으로 설정 */}
//         <Route path="/" element={<StudyGroup />} />
//         {/* 다른 경로에서는 App 컴포넌트로 이동 */}
//         <Route path="/app" element={<App />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );*/



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
