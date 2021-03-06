import {getOrders, getOrdersByUser} from '../utils/index';
import metadata from '../utils/metadata.json';

export const setOrders = (orders) => {
  return {
    type: 'SET_ORDERS',
    orders
  };
};

export const fetchOrders = () => {
  return async(dispatch) => {
    try{
      let orders = await getOrders();
      orders = attachMetadata(orders);
      dispatch(setOrders(orders));
    }
    catch(e){
      console.log(e);
    }
  }
}

export const attachMetadata = (orders) => {
  const data = [];
  orders.map((order, index) => {
    const id = order['tokenId'];
    const obj = Object.assign({}, order);
    obj['metadata'] = metadata[id];
    obj['orderId'] = index;
    data.push(obj);
  });
  data.pop();
  return data;
}