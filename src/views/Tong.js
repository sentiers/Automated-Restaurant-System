import React from "react";

import { ButtonGroup, Button } from "shards-react";
//버튼
import Tables from './Tables';
//테이블(통계조회)
import ProgressBars_tong from "../components/tong/ProgressBars_tong";
//그래프(추가예정)

function Tong(){
  return(
    <div>
      <ButtonGroup>
        <Button theme="secondary">통계 조회</Button>  
        <Button theme="primary" onClick={goJumun}>주문 조회</Button>
      </ButtonGroup>
      <Tables/>
      <ProgressBars_tong/>
      <ButtonGroup>
        <Button theme="secondary" onClick={goTong}>전체 조회</Button>
        <Button theme="primary" onClick={goWol}>월별 조회</Button>
        <Button theme="primary" onClick={goMenu}>메뉴별 조회</Button>
      </ButtonGroup>

    </div>
  )
}

function goTong(){
  window.location.replace("/Tong")
}
function goJumun(){
  window.location.replace("/Jumun")
}

function goWol(){
  window.location.replace("/Wol")
}

function goMenu(){
  window.location.replace("/Menu")
}

export default Tong;
