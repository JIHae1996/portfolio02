import React, { useRef } from 'react'
import '../styles/modal.scss';
import UseOnClickOutside from '../hook/UseOneClickOutside'

const Modal = ({ setModalOpen }) => {

  const ref = useRef()

  UseOnClickOutside(ref, () => {
    setModalOpen(false)
  })

  return (
    <div className="modal-overlay">
      <div className="modal" ref={ref}>
        <h2>준비중 입니다</h2>
        <p>2월 내 런칭 예정</p>
        <button className='btn' onClick={() => setModalOpen(false)}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
