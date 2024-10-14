import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Notice from '../components/Notice';
import NoticeDetails from '../components/NoticeDetails';
import StudyGroup from '../components/StudyGroup';
import Calender from '../components/Calendar'
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { SelectedChannelProvider } from '../SelectedChannelContext';

function App() {
  return (
    <BrowserRouter>
      <SelectedChannelProvider>
        {/* Header와 Footer는 모든 페이지에 공통적으로 렌더링됨 */}
        <Header />
        <div>
          <nav />
          <Routes>
            {/*브라우저에서 path에 따라 element가 렌더링된다*/ }
            <Route path='/' element={<Home />} />
            <Route path='/StudyGroup' element={<StudyGroup />} />
            <Route path='/StudyGroup/Calendar' element={<Calender />} />
            <Route path='/StudyGroup/Notice' element={<Notice />} />  {/*공지사항 목록 페이지*/}
            <Route path='/StudyGroup/NoticeDetails' element={<NoticeDetails />} />  {/*공지사항 세부내용 페이지*/}
          </Routes>
        </div>
        <Footer />
        <FAQ></FAQ>
      </SelectedChannelProvider>
    </BrowserRouter>
  );
}

export default App;

