import React, { useRef, useState, KeyboardEvent, ChangeEvent } from 'react'
import './style.css'
import InputBox from 'components/InputBox';
import { SignInRequestDto } from 'apis/request/auth';
import { signInRequest } from 'apis';
import { SignInResponseDto } from 'apis/response/auth';
import { ResponseDto } from 'apis/response';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { MAIN_PATH } from 'constant';

// component: Authentication View Component 
export default function Authentication() {

    // state: Monitor State 
    const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

    // state: Cookie State 
    const [cookies, setCookies] = useCookies();

    // function: Navigate Function 
    const navigator = useNavigate();

//----------------로그인-------------------------------------------------------------------

    // component: Sign In Card Component 
    const SignInCard = () => {

        // State: Email Element Reference State 
        const emailRef = useRef<HTMLInputElement | null>(null);

        // State: Password Element Reference State 
        const passwordRef = useRef<HTMLInputElement | null>(null);

        // State: Email State 
        const [email, setEmail] = useState<string>('');

        // State: Password State 
        const [password, setPassword] = useState<string>('');

        // State: Password State 
        const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');

        // State: Password Button Icon State 
        const [passwordButtonIcon, setPasswordButtonIcon] = useState<'eye-light-off-icon' | 'eye-light-on-icon'>('eye-light-off-icon')

        // State: Error State 
        const [error, setError] = useState<boolean>(false);

        // function: Sign In Response Processing 
        const signInResponse = (responseBody: SignInResponseDto | ResponseDto | null) => {
            if(!responseBody) {
                alert('네트워크 이상입니다.');
                return;
            }
            const { code } = responseBody;
            if(code === 'SF' || code === 'VF') setError(true);
            if(code === 'DBE') alert('데이터베이스 오류입니다.');
            if(code !== 'SU') return;

            const { token, expirationTime } = responseBody as SignInResponseDto;
            const now = new Date().getTime();
            const expires = new Date(now + expirationTime * 1000);

            setCookies('accessToken', token, {expires, path: MAIN_PATH()});
            navigator(MAIN_PATH());
        }

        // event handler: Change Email Event Processing 
        const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setError(false);
            const {value} = event.target;
            setEmail(value);
        }

        // event handler: Change Password Event Processing 
        const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            setError(false);
            const {value} = event.target;
            setPassword(value);
        }

        // event handler: Sign In Button Click Event Processing Function 
        const onSignInButtonClickHandler = () => {
            const requestBody: SignInRequestDto = { email, password }
            signInRequest(requestBody).then(signInResponse);
        }

        // event handler: Sign Up Button Click Event Processing Function 
        const onSignUpLinkClickHandler = () => {
            setView('sign-up');
        }

        // event handler: Password Button Click Event Processing Function 
        const onPasswordButtonClickHandler = () => {

            if (passwordType === 'text') {
                setPasswordType('password');
                setPasswordButtonIcon('eye-light-off-icon')
            }
            else {
                setPasswordType('text');
                setPasswordButtonIcon('eye-light-on-icon')
            }

        }

        // event handler: Email Input Key Down Event Processing Function 
        const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {

            if (event.key !== 'Enter') return;
            if (!passwordRef.current) return;
            passwordRef.current.focus();
        }

        // event handler: Password Input Key Down Event Processing Function 
        const onPasswordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {

            if (event.key !== 'Enter') return;
            onSignInButtonClickHandler();

        }

        // render: Sign In Card Component Rendering 
        return (
            <div className="auth-card">
                <div className="auth-card-box">
                    <div className="auth-card-top">
                        <div className="auth-card-title-box">
                            <div className="auth-card-title">{'로그인'}</div>
                        </div>
                        <InputBox ref={emailRef} label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요.' error={error} value={email} onChange={onEmailChangeHandler} onKeyDown={onEmailKeyDownHandler} />
                        <InputBox ref={passwordRef} label='패스워드' type={passwordType} placeholder='비밀번호를 입력해주세요.' error={error} value={password} onChange={onPasswordChangeHandler} icon={passwordButtonIcon} onButtonClick={onPasswordButtonClickHandler} onKeyDown={onPasswordKeyDownHandler} />
                    </div>
                    <div className="auth-card-bottom">
                        {error &&
                            <div className="auth-sign-in-error-box">
                                <div className="auth-sign-in-error-message">
                                    {'이메일 주소 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'}
                                </div>
                            </div>
                        }

                        <div className="black-large-full-button" onClick={onSignInButtonClickHandler}>{'로그인'}</div>
                        <div className="auth-description-box">
                            <div className="auth-description">{'신규 사용자이신가요? '}<span className='auth-description-link' onClick={onSignUpLinkClickHandler}>{'회원가입'}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

//---------------회원가입------------------------------------------------------------------

    
    // component: Sign Up Card Component 
    const SignUpCard = () => {

        // State: Email Element Reference State 
        const emailRef = useRef<HTMLInputElement | null>(null);

        // State: Password Element Reference State 
        const passwordRef = useRef<HTMLInputElement | null>(null);

        // State: Password Check Element Reference State 
        const passwordCheckRef = useRef<HTMLInputElement | null>(null);

        // state: Page Number State 
        const [page, setPage] = useState<1 | 2>(1);

        // State: Email State 
        const [email, setEmail] = useState<string>('');

        // State: Password State 
        const [password, setPassword] = useState<string>('');

        // State: Password Check State 
        const [passwordCheck, setPasswordCheck] = useState<string>('');

        // State: Password State 
        const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');

        // State: Password Check State 
        const [passwordCheckType, setPasswordCheckType] = useState<'text' | 'password'>('password');

        // State: Email Error State 
        const [isEmailError, setEmailError] = useState<boolean>(false);
        
        // State: Password Error State 
        const [isPasswordError, setPasswordError] = useState<boolean>(false);

        // State: Password Check Error State 
        const [isPasswordCheckError, setPasswordCheckError] = useState<boolean>(false);

        // State: Email Error Message State 
        const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

        // State: Password Error Message State 
        const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

        // State: Password Check Error Message State 
        const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] = useState<string>('');

        // event handler: Change Email Event Processing 
        const onEmailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const {value} = event.target;
            setEmail(value);
        }

        // event handler: Change Password Event Processing 
        const onPasswordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const {value} = event.target;
            setPassword(value);
        }

        // event handler: Change Password Check Event Processing 
        const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const {value} = event.target;
            setPassword(value);
        }


        // render: Sign Up Card Component Rendering 
        return (
            <div className="auth-card">
                <div className="auth-card-box">
                    <div className="auth-card-top">
                        <div className="auth-card-title-box">
                            <div className="auth-card-title">{'회원가입'}</div>
                            <div className="auth-card-page">{`${page}/2`}</div>
                        </div>
                        <InputBox ref={emailRef} label='이메일 주소 *' type='text' placeholder='이메일 주소를 입력해주세요.' value={email} onChange={onEmailChangeHandler} error={isEmailError} message={emailErrorMessage} />
                        <InputBox ref={passwordRef} label='비밀번호 *' type={passwordType} placeholder='비밀번호를 입력해주세요.' value={password} onChange={onPasswordChangeHandler} error={isPasswordError} message={passwordErrorMessage} />
                        <InputBox ref={passwordCheckRef} label='비밀번호 확인 *' type={passwordCheckType} placeholder='비밀번호를 다시 입력해주세요.' value={passwordCheck} onChange={onPasswordCheckChangeHandler} error={isPasswordCheckError} message={passwordCheckErrorMessage} />
                    </div>
                    <div className="auth-card-bottom">
                        <div className="black-large-full-button">{'다음 단계'}</div>
                        <div className="auth-description-box">
                            <div className="auth-description">{'이미 계정이 있으신가요? '}<span className='auth-description-link'>{'로그인'}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    // render: Authentication View Rendering 
    return (
        <div id='auth-wrapper'>
            <div className="auth-container">
                <div className="auth-jumbotron-box">
                    <div className="auth-jumbotron-contents">
                        <div className="auth-logo-icon"></div>
                        <div className="auth-jumbotron-text-box">
                            <div className="auth-jumbotron-text">{'환영합니다.'}</div>
                            <div className="auth-jumbotron-text">{'JustGamer Board 입니다.'}</div>
                        </div>
                    </div>
                </div>
                {view === 'sign-in' && <SignInCard />}
                {view === 'sign-up' && <SignUpCard />}
            </div>
        </div>
    )
}
