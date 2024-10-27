import React from 'react'
import './style.css'

// component: Footer layout
export default function index() {

// event Handler: 인스타 아이콘 버튼 클릭 이벤드 처리
const onInstaIconButtonClickHandler = () => {
    window.open('https://www.instagram.com');
}

// event Handler: 네이버 블로그 아이콘 버튼 클릭 이벤드 처리
const onNaverBlogIconButtonClickHandler = () => {
    window.open('https://blog.naver.com');
}

//  render: Footer layout Rendering
  return (
    <div id="footer">
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-logo-box">
                    <div className="icon-box">
                        <div className="icon logo-light-icon"></div>
                    </div>
                    <div className="footer-logo-text">{'Lees Board'}</div>
                </div>
                <div className="footer-link-box">
                    <div className="footer-email-link">{'admin@email.com'}</div>
                    <div className="icon-button" onClick={onInstaIconButtonClickHandler}>
                        <div className="icon insta-icon"></div>
                    </div>
                    <div className="icon-button" onClick={onNaverBlogIconButtonClickHandler}>
                        <div className="icon naver-blog-icon"></div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-copyright">{'Copyright © 2024 JustGamer. All Rights Reserved.'}</div>
            </div>
        </div>
    </div>
  )
}
