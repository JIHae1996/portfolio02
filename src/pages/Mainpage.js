import React from 'react'
import '../styles/main.scss'

function Mainpage() {
  return (
    <div className='main_container'>
        <h1 className="aliens">
            <span>J</span>
            <span>I</span>
            <span>H</span>
            <span>A</span>
            <span>E</span>
        </h1>
        <div className='txt_anicont'>
            <p>PORTFOLIO</p>
            <p>PORTFOLIO</p>
            <p>PORTFOLIO</p>
            <p>PORTFOLIO</p>
        </div>
        <div className='circle object_circle01'></div>
        <div className='circle object_circle02'></div>
        <div className='txt_container'>
            <p>
                효율적인 업무를 지향하는 이지해 퍼블리셔 입니다.<br/>
                채널 별 이벤트 페이지 퍼블리싱과<br/>
                UI 개발을 진행하고 있습니다<br/>
            </p>
        </div>
        <div className="scroll animated fadeInUp"></div>
    </div>
  )
}

export default Mainpage