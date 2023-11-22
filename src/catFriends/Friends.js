import React, { useState } from 'react';
import CatList from './CatList';
import CatAdd from './CatAdd';
import CatData from '../assets/DB/CatData';
import './Friends.css'

const Friends = () => {
  const [data, setData] = useState(CatData);
  // 삭제
  const onDel = (id) => {
    setData(data.filter((item) => item.id !== id))
  };

  // 모두 삭제
  const onAllDel = () => {
    setData([]);
  };

  // 복구
  const onMod = () => {
    setData(CatData);
  };

  // 추가
  const onAdd = (name, age, image) => {
    setData([...data, { id: data.length + 1, name, age, image }]);
  };


  // 고양이 추가 버튼
  const [isToggle, setIsToggle] = useState(false);
  const onChk = (e) => {
    const { checked } = e.target;
    setIsToggle(checked);
  }

  return (
    <section>
      <h2>고양이 친구들</h2>
      <h3>{data.length}마리</h3>
      <label htmlFor="chk">
        <input type="checkbox" name="" id="chk" onChange={onChk} checked={isToggle} /><span>고양이 추가</span>
      </label>
      <CatList data={data} onDel={onDel} onMod={onMod} />
      <div className="btnBox">
        <button onClick={() => onAllDel()}>모두 삭제</button>
        <button onClick={onMod}>복구</button>
      </div>
      {isToggle && <CatAdd onAdd={onAdd} onChk={onChk} />}
    </section>
  );
};

export default Friends;