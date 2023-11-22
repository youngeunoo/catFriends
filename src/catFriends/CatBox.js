import React from 'react';

const CatBox = ({ item, onDel }) => {
  const { image, name, age, id } = item;
  return (
    <li>
      <img src={image} alt="사진" />
      <h4>이름 : {name}</h4>
      <p>나이 : {age}</p>
      <button onClick={() => onDel(id)} className='boxBtn'>삭제</button>
    </li >
  );
};

export default CatBox;