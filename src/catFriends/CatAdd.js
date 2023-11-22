import React, { useState } from 'react';

const CatAdd = ({ onAdd, onChk }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    onAdd(name, age, image);
    setName('');
    setAge('');
    setImage('');

  }
  return (
    <div className='box'>
      <p>이름: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></p>
      <p>나이: <input type="text" value={age} onChange={(e) => setAge(e.target.value)} /></p>
      <p>사진: <input type="text" value={image} onChange={(e) => setImage(e.target.value)} /></p>
      <button onClick={handleAdd}>추가</button>
    </div>
  );
};

export default CatAdd;