import React, { ChangeEvent, useRef, useState, KeyboardEvent, useEffect } from 'react'
import './style.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from 'constant';
import { useCookies } from 'react-cookie';
import { useBoardStore, useLoginUserStore } from 'stores';

// component: Header Layout 
export default function Header() {

    // state: Sign In User State 
    const { loginUser, setLoginUser, resetLoginUser } = useLoginUserStore();

    // state: Cookie State 
    const { pathname } = useLocation();

    // state: Cookie State 
    const [cookies, setCookie] = useCookies();

    // state: Sign In State 
    const [isLogin, setLogin] = useState<boolean>(false);


    const isAuthPage = pathname.startsWith(AUTH_PATH());
    const isMainPage = pathname.startsWith(MAIN_PATH());
    const isSearchPage = pathname.startsWith(SEARCH_PATH(''));
    const isBoardDetailPage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_DETAIL_PATH(''));
    const isBoardWritePage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_WRITE_PATH());
    const isBoardUpdatePage = pathname.startsWith(BOARD_PATH() + '/' + BOARD_UPDATE_PATH(''));
    const isUserPage = pathname.startsWith(USER_PATH(''));


    // function: Navigate Function 
    const navigate = useNavigate();

    // event handler: Logo Click Event Processing Function 
    const onLogoClickHandler = () => {
        navigate(MAIN_PATH());
    }


    // component: Search Button Component 
    const SearchButton = () => {

        // state: Search Button Element Reference State 
        const searchButtonRef = useRef<HTMLDivElement | null>(null);

        // state: Search Button State 
        const [status, setStatus] = useState<boolean>(false);

        // state: SearchWord State 
        const [word, setWord] = useState<string>('');

        // state: SearchWord Path Variable State 
        const { searchWord } = useParams();

        // event Handler: SearchWord Change Event Processing Function 
        const onSearchWordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            setWord(value);
        }

        // event Handler: SearchWord Key Event Processing Function 
        const onSearchWordKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key !== 'Enter') return;
            if (!searchButtonRef.current) return;
            searchButtonRef.current.click();
        }

        // event handler: Search Button Click Event Processing Function 
        const onSearchButtonCLickHandler = () => {
            if (!status) {
                setStatus(!status);
                return;
            }
            navigate(SEARCH_PATH(word));
        }

        // effect: Processing Function When SearchWord Path Variable Change 
        useEffect(() => {
            if (searchWord) {
                setWord(searchWord);
                setStatus(true);
            }
        }, [searchWord]);

        if (!status)
        // render: Search Button Component Rendering (Click False Status) 
        return (
            <div className="icon-button" onClick={onSearchButtonCLickHandler}>
                <div className="icon search-light-icon"></div>
            </div>
        );

        // render: Search Button Component Rendering (Click True Status) 
        return (
            <div className="header-search-input-box">
                <input type="text" className='header-search-input' placeholder='검색어를 입력해주세요.' value={word} onChange={onSearchWordChangeHandler} onKeyDown={onSearchWordKeyDownHandler} />
                <div ref={searchButtonRef} className="icon-button" onClick={onSearchButtonCLickHandler}>
                    <div className="icon search-light-icon"></div>
                </div>
            </div>
        );
    }

    // component: Sign In & My Page Button Component 
    const MyPageButton = () => {

        // state: uesrEmail Path Variable State 
        const { userEmail } = useParams();

        // event handler: My Page Button Click Event Processing Function 
        const onMyPageButtonClickHandler = () => {
            if (!loginUser) return;
            const { email } = loginUser;
            navigate(USER_PATH(email));
        }

        // event handler: Sign Out Button Click Event Processing Function 
        const onSignOutButtonClickHandler = () => {
            resetLoginUser();
            navigate(MAIN_PATH());
        }

        // event handler: Sign In Button Click Event Processing Function 
        const onSignInButtonClickHandler = () => {
            navigate(AUTH_PATH());
        }

        // render: My Page Button Rendering 
        if (isLogin)
        return <div className="white-button" onClick={onMyPageButtonClickHandler}>{'마이페이지'}</div>;

        // render: Sign Out Button Rendering 
        if (isLogin && userEmail === loginUser?.email)
        return <div className="white-button" onClick={onSignOutButtonClickHandler}>{'로그아웃'}</div>;

        // render: Sign In Button Rendering 
        return <div className="black-button" onClick={onSignInButtonClickHandler}>{'로그인'}</div>;
    }

    // component: Upload Button Component 
    const UploadButton = () => {

        // state: Board State 
        const { title, content, boardImageFileList, resetBoard } = useBoardStore();

        // event handler: Upload Button Click Event Processing Function 
        const onUploadButtonClickHandler = () => {

        }

        // render: Upload Button Component Rendering 
        if (title && content)
        return <div className='black-button' onClick={onUploadButtonClickHandler}>{'업로드'}</div>;

        // render: Upload Impossible Button Component Rendering 
        return <div className='disable-button'>{'업로드'}</div>;
    }

    // render: Header Layout Rendering 
    return (
        <div id="header">
            <div className="header-container">
                <div className="header-left-box" onClick={onLogoClickHandler}>
                    <div className="icon-box">
                        <div className="icon logo-dark-icon"></div>
                    </div>
                    <div className="header-logo">{'JustGamer Board'}</div>
                </div>
                <div className="header-right-box">
                    {(isAuthPage || isMainPage || isSearchPage || isBoardDetailPage) && <SearchButton />}
                    {(isMainPage || isSearchPage || isBoardDetailPage || isUserPage) && !isAuthPage && <MyPageButton />}
                    {(isBoardWritePage || isBoardUpdatePage) && <UploadButton />}
                </div>
            </div>
        </div>
    )
}
