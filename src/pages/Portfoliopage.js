import React, { useState } from 'react';
import '../styles/portfolio.scss';
import Modal from '../components/Modal';

function Portfoliopage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='portfolio_container'>
      <h1 className='portfolio_title'>Web Publishing Works</h1>
      <div className="work_content">
        <div className="card">
          <div className="content">
            <h2 className="title">핫트랙스<br/>웰컴 메인</h2>
            <p className="copy">
              핫트랙스 웰컴 메인페이지 UI 개발
              <em>&#40;1월 25일 개발 완료&#41;</em>
            </p>
            {isModalOpen && <Modal setModalOpen={() => setIsModalOpen(false)} />}
            <button className="btn" onClick={openModal}>더 보기</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">교보문고<br/>스토리 공모전</h2>
            <p className="copy">
              교보문고 스토리 공모전 :<br/>
              공모전 이벤트 및 순정복서 드라마 런칭 기념 이벤트 페이지</p>
              <a href='https://event.kyobobook.co.kr/detail/211964' target='_blank' className="btn">더 보기</a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">교보문고<br/>초중고<br/>겨울 기획전</h2>
            <p className="copy">교보문고 초중고 겨울 기획전 이벤트 페이지</p>
             <a href='https://event.kyobobook.co.kr/detail/215468' target='_blank' className="btn">더 보기</a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">1석sam조</h2>
            <p className="copy">전자책 단말기 1석sam조 이벤트 페이지</p>
             <a href='https://event.kyobobook.co.kr/detail/210956' target='_blank' className="btn">더 보기</a>
          </div>
        </div>
      </div>
      <h1 className='portfolio_title'>Design Works</h1>
      <div className='work_content other_content'>
        <div className="card">
          <div className="content">
              <h2 className="title">삼성 갤럭시 테마</h2>
              <p className="copy">
                삼성 갤럭시 테마 디자인
              </p>
               <a href='https://notefolio.net/jihae_96/258472' target='_blank' className="btn">더 보기</a>
          </div>
        </div>
          <div className="card">
            <div className="content">
                <h2 className="title">로티 아이콘</h2>
                <p className="copy">
                  일러스트앱 디자인(개인포트폴리오)
                </p>
                 <a href='https://notefolio.net/jihae_96/325272' target='_black' className="btn">더 보기</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Portfoliopage;
