import React from "react";
import { useState } from "react"

const StatePracticeComp = () => {
    const [time, setTime] = useState(1);

    const handleClick = () => {
        let newTime;
        if (time >= 12) {
            newTime = 1;
        } else {
            newTime = time + 1
        }
        setTime(newTime)
    }

    console.log('update')

    return (
        <div>
            <span>현재 시각: {time}시</span>
            <button onClick={handleClick}>Update</button>
        </div>
    );
};

export default StatePracticeComp;

export const StatePractticeComp2 = () => {
    // 상태 관리 (기존과 동일)
    const [isOn, setToggle] = useState(true);
    const toggleBtn = () => setToggle(!isOn);

    return (
        <div className="basic-section">
            <p>1. useState를 이용한 Toggle버튼</p>
            <button onClick={toggleBtn}>{isOn ? "ON" : "OFF"}</button>
        </div>
    );
}

export const StatePractticeComp3 = () => {

    const [price, setPrice] = useState(0);
    const incrementPrice = (price: number) => {
        setPrice((prevValue) => prevValue + price);
    };

    return (
        <a>
            <div className="basic-section">
                <p>2. 버튼에 있는 값 input으로 옮기기</p>
                <button onClick={() => incrementPrice(10)}>10+</button>
                <button onClick={() => incrementPrice(50)}>50+</button>
                <input value={price} readOnly />
            </div>
        </a>
    )
}

export const StatePractticeComp4 = () => {

    const [like, setLike] = useState(0);
    const [titles, setTitles] = useState(['test1', 'test2']);


    // Modal 컴포넌트
    function Modal() {
        return (
            <div>
                <h4>
                    {titles[0]}{" "}
                    <span
                        onClick={() => {
                            setLike(like + 1);
                            let copyTitles = [...titles];
                            copyTitles[0] = 'A';
                            setTitles(copyTitles);
                        }}
                    >
                        좋아요👍
                    </span>{" "}
                    {like}
                </h4>
                <h4>{titles[1]}</h4>
            </div>
        );
    }

    return (
        <div>
            <h1>Modal Example</h1>
            <Modal />
        </div>
    )
}