import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="logo headerimage.png"
          alt="logo 이미지"
          className="logo-image"
          />
          <nav className="navbar">
            <ul>
              <li><a href="#lectures">강의</a></li>
              <li><a href="#study">스터디</a></li>
              <li><a href="#mentoring">멘토링</a></li>
              <li><a href="#community">커뮤니티</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
          <button className="login">로그인</button>
          <button className="signup">회원가입</button>
        </div>
      </header>

      <main className="App-main">
        <section className="hero">
          <div className='hero-content'>
            <div className='text-content' style={{textAlign: 'left'}}>
              <h1><span style={{ color: '#4caf4f' }}>Nexcents</span>에서 <span style={{ color: '#4caf4f' }}>성장</span>을</h1>
              <h1>도와드려요</h1>
              <p>스터디, 멘토링, 커뮤니티를 통해 함께 성장하는 경험을 제공합니다</p>
              <button className="cta-button">시작하기</button>
            </div>
            <img
                src="image.png"
                alt="배너 이미지"
                className="hero-image"
                />
          </div>
        </section>

        <h1>
          IT 전문가를 위한 모든 지원을 하나의<br />
          플랫폼에서 완벽하게 관리하세요
        </h1>

        <section className="features">
          <div className="feature">
            <img
              src="feature1.png"
              alt="feature 이미지1"
              className="feature-image"
              />
            <h2>
              각 분야 최고의 전문가들이<br />
              제공하는 프리미엄 강의<br />
            </h2>
            <p>각 분야 최고의 전문가들이 제공하는 프리미엄<br />
            강의는 실무 중심의 최신 트렌드를 반영하여 <br />
            학습자가 즉시 적용 가능한 지식을 제공합니다</p>
          </div>
          <div className="feature">
            <img
                src="feature2.png"
                alt="feature 이미지2"
                className="feature-image"
                />
            <h2>
              나에게 맞는 스터디와<br />
              멘토를 완벽하게 매칭
            </h2>
            <p>나에게 맞는 스터디와 멘토를 완벽하게 매칭하여<br />
            개인의 학습 스타일과 목표에 최적화된 지원을<br />
            제공합니다. 이를 통해 학습자는 전문적인 조언을<br />
            바탕으로 효과적으로 성장할 수 있습니다</p>
          </div>
          <div className="feature">
            <img
                src="feature3.png"
                alt="feature 이미지3"
                className="feature-image"
                />
            <h2>
              다양한 분야의 사람들과<br />
              소통하는 공간
            </h2>
            <p>다양한 분야의 사람들과 자유롭게 의견을 나누고<br />
            서로의 경험을 공유함으로써 새로운 통찰과 협력의<br />
            기회를 제공합니다</p>
          </div>
        </section>

        <section className="features">
          <h1 className="title">IT 전문가로 성장할 준비가 되셨나요?</h1>
          <button className="cta-button">Get started →</button>
        </section>
      </main>
      
      <div className="App-footer">
        <div className="footer-bottom">
          <img
            src="Logo.png"
            alt="Logo 이미지"
            className="logo-image"
            />
          <p>Copyright © 2024 Nexcent Inc.<br />
          All rights reserved.</p>
          <div className="social-icons">
              <a href="#">페이스북</a>
              <a href="#">트위터</a>
              <a href="#">유튜브</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="company">
              <h3>회사</h3>
              <ul>
                <li><a href="#">회사 소개</a></li>
                <li><a href="#">서비스</a></li>
                <li><a href="#">블로그</a></li>
                <li><a href="#">채용</a></li>
              </ul>
          </div>
          <div className="support">
            <h3>지원</h3>
            <ul>
                <li><a href="#">자주 묻는 질문</a></li>
                <li><a href="#">고객 지원</a></li>
                <li><a href="#">연락하기</a></li>
            </ul>
          </div>
          <div className="newsletter">
            <h3>뉴스 구독하기</h3>
            <select>
                <option value="">이메일 주소 입력</option>
            </select>
          </div>
        </div>
      </div>

      <img
        src="FAQ.png"
        alt="FAQ 이미지"
        className="faq-image"
        />
    </div>
  );
}

export default App;

  