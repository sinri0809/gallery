import React from 'react';


import work01 from './assets/01.jpg';
import work02 from './assets/02.jpg';
import work03 from './assets/03.jpg';
import work04 from './assets/04.jpg';
import work05 from './assets/05.jpg';
import work06 from './assets/06.jpg';

import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>작품 소개</h1>
        <p>고독과 상실감을 솔직하게 표현하고자했습니다</p>
      </header>

      <article className='content-list'>
        <div className='content-item'>
          <img src={work05} className="work-image" alt="심원" />
          <h5 className='content-title'>심원</h5>
          <h6 className='content-sub-title'>"심연과 같이 잔잔하고 깊은 마음"</h6>
          {/* <p className='content-explain'>설명</p> */}
          <span className='content-price'>11,111</span>
        </div>
        <div className='content-item'>
          <img src={work03} className="work-image" alt="아스팔트" />
          <h5 className='content-title'>아스팔트</h5>
          <h6 className='content-sub-title'>"거칠고 평평한 아스팔트 바닥"</h6>
          <p className='content-explain'>
            나는 차갑고 거친 아스팔트 바닥에 누워 점점 더 가라앉고 싶었다 <br />
            눌리고 밟혀 나의 질량이 나에게서 멀어져, <br />
            나의 존재가 사라지는 순간까지 <br />
            알 수 없는 존재가 나를 짓누르기를 바랬다
          </p>
          <span className='content-price'>22,111</span>
        </div>
        <div className='content-item'>
          <img src={work04} className="work-image" alt="침묵" />
          <h5 className='content-title'>침묵</h5>
          <h6 className='content-sub-title'>"진한 상실감과 비어버린 "</h6>
          {/* <p className='content-explain'>설명</p> */}
          <span className='content-price'>9,999</span>
        </div>
        <div className='content-item'>
          <img src={work02} className="work-image" alt="겨울하늘" />
          <h5 className='content-title'>겨울하늘</h5>
          <h6 className='content-sub-title'>"재난은 순진한 어린아이와 같다" - Also sprach Zarathustra</h6>
          <p className='content-explain'>
            지난 시간 나를 옭아맨 정상(正常)을 향한 욕구와 대도시를 향한 투덜거림은 <br />
            나를 스스로 부끄러운 사람으로 만들었나 <br />
            나의 불완전한 불만과 터져나올것 같은 열등감에도 <br />
            ‘백발 노인과 같은 그 겨울 하늘’ 을 품고 싶어했나
          </p>
          <span className='content-price'>22,111</span>
        </div>
        <div className='content-item'>
          <img src={work01} className="work-image" alt="겨울나무" />
          <h5 className='content-title'>겨울나무</h5>
          <h6 className='content-sub-title'>"찢어지는 고통에도 자리를 지켜야했다"</h6>
          <p className='content-explain'>
            {/* 추운 겨울, 나를 앗아가는 허망한 바람에도 <br /> */}
          </p>
          <span className='content-price'>33,333</span>
        </div>
        <div className='content-item'>
          <img src={work06} className="work-image" alt="위선" />
          <h5 className='content-title'>위선</h5>
          <h6 className='content-sub-title'>"사람들은 나를 어떻게 생각할까"</h6>
          {/* <p className='content-explain'>설명</p> */}
          <span className='content-price'>19,999</span>
        </div>
      </article>

      <footer className='footer'>
        <span>Sinri 신리</span>
        <p>신리(新里)는 새로운 마을이라는 제 고향 마을의 이름에서 착안하였습니다</p>
        <address>
          <div>
            <span className="category">📩</span>
            <a href="mailto:1lliodqb@gmail.com" target='_blank' rel="noreferrer">1lliodqb@gmail.com</a>
          </div>
          <div>
            <span className="category">SNS</span>
            <a href="https://www.instagram.com/irnis_time/?hl=ko" target='_blank' rel="noreferrer">@irnis_time</a>
          </div>
        </address>
      </footer>
    </div>
  );
}

export default App;
