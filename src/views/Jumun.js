import React from "react";

import { ButtonGroup, Button } from "shards-react";
//버튼
import Tables_jumun from '../components/tong/Tables_jumun';
//테이블(통계조회)

function Jumun(){
  return(
    <div>
      <ButtonGroup>
        <Button theme="primary" onClick={goTong}>통계 조회</Button>  
        <Button theme="secondary">주문 조회</Button>
      </ButtonGroup>
      <Tables_jumun/>
    </div>
  )
}

function goTong(){
  window.location.replace("/Tong")
}

export default Jumun;
