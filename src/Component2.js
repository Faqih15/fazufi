import React from 'react';

export default function Component2(props) {
    const ganti = ()=>{
        props.setAngka("angka diganti lewat props")
    }
  return <div onClick={ganti}>component2</div>;
}
