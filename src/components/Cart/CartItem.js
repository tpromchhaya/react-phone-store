import React from 'react'

export default function CartItem({item, value}) {
  const{id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} 
          style={{width:'5rem', height:'5rem'}}
          className="img-fluid"
          alt='product'
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {/* this is to change for large screen */}
        <span className="d-lg-none">product :</span> 
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span> 
        {price} $
      </div>
      {/* Start of the quantity buttons */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* end of the column for the quantity button*/}
      {/* Start Trash functionality with the trash icon */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>     

      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : {total} $</strong>
      </div>
    </div>
  )
}
