//useEffect함수는 react component가 rendering 될 때 마다 특정 작업(side effect)을 실행 할 수 있도록하는 리액트 hook.
//side effect:component가 rendering 된 이후에 비동기로 처리되어야하는 부수적인 효과.
//이러한 기능으로 인해 함수형 component에서도 class형 component에서 사용했던 생명주기 메소드를 사용할 수 있게 되었습니다.
import React, { useEffect } from 'react';

const Timer = (props) =>{
    //timer component가 화면에 처음 rendering됬을때만 실행될 useEffect기 때문에
    //두번쨰 인자로 빈 배열 넣어주기
    
    useEffect(()=> {
        //타이머 만들어주기
        //timer가 맨 처음 browser에 mounting되었을 때 useEffect안에 있는 callback함수가 실행
        //setInterval의 인자에 들어가있는 콜백을 1초마다 1번씩 반복해서 부른다
        //useEffect는 두번째 인자로 빈 배열을 받기 떄문에 timer component가 맨 처음 browser에 rendring됐을때만 불리게 된다.
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는중...');
        },1000);
        
        //정리작업
        //useEffect의 return값으로 함수를 하나 주고 정리 작업 코드 작성
        //setInterval 끝내주기
        //timer component가 unmount될 때, 화면에서 사라질 때 실행된다.
        return () =>{
            clearInterval(timer);//인터벌종료-인자로 우리가 만든 timer넣어주기
            console.log('타이머가 종료되었습니다.');
        };
    },[]);

    return(
    <div>
        <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
    );
};

export default Timer;