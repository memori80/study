import React, {Component} from 'react';
import ShopItem from './ShopItem';
import { inject, observer } from 'mobx-react';
import {observable} from "mobx"; // 불러오기

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

@inject(({ market }) => ({ onPut: market.put }))
@observer
class ShopItemList extends Component {
  render() {
    const itemList = items.map(item => (
      <ShopItem {...item} key={item.name} onPut={this.props.onPut}/>
    ));
    return <div>{itemList}</div>;
  }
}

export default ShopItemList;
// // **** onPut 함수 추가됨
// const ShopItemList = ({ onPut }) => {
//   const itemList = items.map(item => (
//     <ShopItem {...item} key={item.name} onPut={onPut} />
//   ));
//   return <div>{itemList}</div>;
// };
//
// // **** inject, observer 적용
// export default inject(({ market }) => ({
//   onPut: market.put,
// }))(observer(ShopItemList));
