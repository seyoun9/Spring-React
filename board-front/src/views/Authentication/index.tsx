import React, { useState } from 'react'
import './style.css'

// component: Authentication View Component 
export default function Authentication() {

    // state: Monitor State 
    const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

    // component: Sign In Card Component 
    const SignInCard = () => {

        // render: Sign In Card Component Rendering 
        return (
            <div className="auth-card"></div>
        );
    };

    // component: Sign Up Card Component 
    const SignUpCard = () => {

        // render: Sign Up Card Component Rendering 
        return (
            <div className="auth-card"></div>
        );
    };


    // render: Authentication View Rendering 
    return (
        <div id='auth-wrapper'>
            <div className="auth-container">
                <div className="auth-jumbotron-box">
                    <div className="auth-jumbotron-contents">
                        <div className="auth-logo-icon"></div>
                        <div className="auth-jumbotron-text-box">{'환영합니다.'}</div>
                        <div className="auth-jumbotron-text-box">{'JustGamer Board 입니다.'}</div>
                    </div>
                </div>
                {view === 'sign-in' && <SignInCard />}
                {view === 'sign-up' && <SignUpCard />}
            </div>
        </div>
    )
}
