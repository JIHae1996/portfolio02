import React from 'react'
import '../styles/intro.scss'

function Intropage() {
  return (
    <div className='intro_container'>
      <div className="hello-parent">
        <svg className="hello-word" width="20vw" height="20vw" viewBox="0 0 365 365">
          <g id="H-letter">
          <line className="H-left-stroke" x1="17" y1="0" x2="17" y2="124" stroke="#ddd" fill="none" strokeWidth="34" />
          <line className="H-mid-stroke" x1="33" y1="62" x2="68" y2="62" stroke="#ddd" fill="none" strokeWidth="34" />
          <line className="H-right-stroke" x1="84" y1="0" x2="84" y2="124" stroke="#ddd" fill="none" strokeWidth="34" />
          </g>
        
          <g id="E-letter">
            <line className="E-left-stroke" x1="138" y1="0" x2="138" y2="124" stroke="#ddd" fill="none" strokeWidth="34" />
            <line className="E-top-stroke" x1="154" y1="17" x2="201" y2="17" stroke="#ddd" fill="none" strokeWidth="34" />
            <line className="E-mid-stroke" x1="154" y1="62" x2="196" y2="62" stroke="#ddd" fill="none" strokeWidth="34" />
            <line className="E-bottom-stroke" x1="154" y1="107" x2="201" y2="107" stroke="#ddd" fill="none" strokeWidth="34" />
          </g>
        
          <g id="L-one-letter">
            <line className="L-one-long-stroke" x1="17" y1="153" x2="17" y2="277" stroke="#ddd" fill="none" strokeWidth="34" />
            <line className="L-one-short-stroke" x1="33" y1="260" x2="77" y2="260" stroke="#ddd" fill="none" strokeWidth="34" />
          </g>
        
          <g id="L-two-letter">
            <line className="L-two-long-stroke" x1="104" y1="153" x2="104" y2="277" stroke="#ddd" fill="none" strokeWidth="34" />
            <line className="L-two-short-stroke" x1="120" y1="260" x2="164" y2="260" stroke="#ddd" fill="none" strokeWidth="34" />
          </g>
        
          <g id="O-letter">
            <circle className="O-stroke" cx="231" cy="215" r="48" stroke="#ddd" fill="none" strokeWidth="31" />
          </g>  
        </svg>
      </div>
      <div className='selfintro_wrap'>
        <h2>About JiHae</h2>
        <p>
          안녕하세요!<br/>
          원할한 커뮤니케이션을 지향하며 업무를 진행하는 이지해 웹 퍼블리셔 입니다.
        </p>
        <p>
          저는 1년간의 스타트 업에서의 디자이너 경력과 1년간의 웹 퍼블리싱 경력을 가지고 있으며,<br/>
          현재는 교보문고 크로스플랫폼 팀에서 웹 퍼블리셔로 근무 하고 있습니다.
        </p>
        <p>
          인터랙션에 관심이 많으며, 사용자에게 다양한 방식의 UX를 전달하고 싶어요.
        </p>
      </div>
    </div>
    
  )
}

export default Intropage