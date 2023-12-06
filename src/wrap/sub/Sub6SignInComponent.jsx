import React from 'react';
import axios from 'axios';
import './scss/sub6.scss';
import { useNavigate, useLocation, Link }  from  'react-router-dom';
import { loginINFO } from '../../reducer/login';
import { useDispatch, useSelector } from 'react-redux';
import { address } from '../../reducer/address';

export default function Sub6SignInComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = React.useState({
        아이디:'',
        비밀번호:'',
        로그인정보:{}
    });

    const onClickIdSearch=(e)=>{
        e.preventDefault();
        navigate('/sub6IdSearch');
    };
    const onClickPwSearch=(e)=>{
        e.preventDefault();
        navigate('/sub6PwSearch');
    };

    const onClickSignup=(e)=>{
        e.preventDefault();
        navigate('/sub5');
    };

    const onSubmitLogin=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('userId', state.아이디);
        formData.append('userPw', state.비밀번호);
        // url:'http://guon2999.dothome.co.kr/kurly/kurly_login_test.php',
        axios({
            url:'http://guon2999.dothome.co.kr/kurly/kurly_login.php',
            method:'POST',
            data:formData
        })
        .then((res)=>{
            if(res.status===200){
                if(res.data!==''){
                    let today = new Date();
                    today.setDate(today.getDate()+3);
                    const obj={
                        아이디:res.data.아이디,
                        이름:res.data.이름,
                        휴대폰:res.data.휴대폰,
                        주소:res.data.주소,
                        만료일:today.getTime()
                    }
                    localStorage.setItem('Kurly_LogIn', JSON.stringify(obj));
                    dispatch(loginINFO(obj));
                    dispatch(address(res.data.주소));
                }
                else{
                    console.log("가입된 계정이 없습니다.");
                }
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류 !!" + err);
        })
        navigate('/index');
    };

    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        })
    }
    const onChangePw=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        })
    }

    return (
        <main id='sub6' className='sub6'>
            <section id="section1">
                <div className="container">
                    <div className="title">
                        <h2 className="title-text">로그인</h2>
                    </div>
                    
                    <div className="content sub6-content">
                       <form onSubmit={onSubmitLogin} autoComplete='off'>
                            <ul>
                                <li>
                                    <div className="gap">
                                        <input type="text" name='userId' id='userId' value={state.아이디} onChange={onChangeId} placeholder='아이디를 입력하세요'/>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="password" name='userPw' id='userPw' value={state.비밀번호} onChange={onChangePw} placeholder='비밀번호를 입력하세요'/>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <span>
                                            <a href="!#" onClick={onClickIdSearch}>아이디 찾기</a>
                                            <i>|</i>
                                            <a href="!#" onClick={onClickPwSearch}>비밀번호 찾기</a>
                                        </span>                                        
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="submit" name='submitBtn' id='submitBtn' value={'로그인'} />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                        <input type="button" name='signupBtn' id='signupBtn' value={'회원가입'} onClick={onClickSignup} />
                                    </div>
                                </li>
                            </ul>
                       </form>
                    </div>
                </div>
            </section>
        </main>
    );
};
