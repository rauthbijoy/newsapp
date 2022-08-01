import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner = () => {

    return (
      <div className="flex justify-center">
          <img src={loading} alt="" />
      </div>
    )
  
}
export default Spinner