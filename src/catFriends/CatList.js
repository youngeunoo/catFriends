import React from 'react';
import CatBox from './CatBox';

const CatList = ({ data, onDel, onMod }) => {

  return (
    <ul>
      {data.map((item) => (
        <CatBox key={item.id} item={item} onDel={onDel} onMod={onMod} />
      ))}
    </ul>
  );
};

export default CatList;