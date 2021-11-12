import React from "react";

import { ButtonGroup, Button } from "shards-react";
//버튼
import Tables_wol from '../components/tong/Tables_wol';
//테이블(통계조회)
import ProgressBars_wol from "../components/tong/ProgressBars_wol";
//그래프(추가예정)

function Wol(){
  return(
    <div>
      <ButtonGroup>
        <Button theme="secondary">통계 조회</Button>  
        <Button theme="primary" onClick={goJumun}>주문 조회</Button>
      </ButtonGroup>
      <Tables_wol/>
      <ProgressBars_wol/>
      <ButtonGroup>
        <Button theme="primary" onClick={goTong}>전체 조회</Button>
        <Button theme="secondary" onClick={goWol}>월별 조회</Button>
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

export default Wol;
