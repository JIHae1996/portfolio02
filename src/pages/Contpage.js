import React from 'react'
import '../styles/cont.scss'


function Contpage() {
  return (
    <div className='cont_container'>
      <div className='cont_disc'>
        <h1 className='cont_h1'>contect</h1>
        <h2 className='cont_title'>wlgo3333@naver.com</h2>
        <p className='cont_dis'>
          <span>기회가 된다면 언제든지 함께 하고 싶습니다!</span>
          <span>최대한 빠른 시간내로 답변 드리겠습니다. 감사합니다!</span>
        </p>
        <a className='email_btn'  href="mailto:wlgo3333@naver.com" target='blank_'>메일 보내기</a>
      </div>
    </div>
  )
}

export default Contpage