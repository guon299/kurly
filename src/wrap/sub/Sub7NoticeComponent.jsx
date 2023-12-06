import React from 'react';
import axios from 'axios';
import './scss/sub7.scss';
import Sub7NoticeComponentChildList from './Sub7NoticeComponentChildList';
import Sub7NoticeLeftComponent from './Sub7NoticeLeftComponent';

export default function Sub7SignInComponent() {

    const [state, setState] = React.useState({
        공지사항:[],
        공지카운트:0,
        게시글카운트:0,
    });

    React.useEffect(()=>{
        axios({
            url:'http://guon2999.dothome.co.kr/kurly/green_kurly_notice_table_select.php',
            method:'GET'
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            if(res.status===200){
                setState({
                    ...state,
                    공지사항:res.data
                })
            }
        })
        .catch((err)=>{
            console.log("AXIOS 오류!! " + err)
        })
        console.log("데이터 확인 "+ state.공지사항)
    },[])

    React.useEffect(()=>{
        if(state.공지사항.length>0){
            let cnt=0;
            state.공지사항.map((item, idx)=>{
                if(item.타입==='공지'){
                    cnt++
                }
            })
            setState({
                ...state,
                공지카운트:cnt,
                게시글카운트:state.공지사항.length
            })
        }
    },[state.공지사항])
    return (
        // #2 공지사항 폼 만들기 -> 사스
        <main id='sub7' className='sub'>
            <section id="section1">
                <div className="container">
                    <div className="content sub7_content">
                        <Sub7NoticeLeftComponent/>
                       <Sub7NoticeComponentChildList 공지카운트={state.공지카운트} 공지사항={state.공지사항} 게시글카운트={state.게시글카운트} />
                    </div>
                </div>
            </section>
        </main>
    );
};