import React from "react"
import { Link } from "gatsby"
import Body from "../images/body.jpg"
import Headjoint from "../images/download.png"
import './productList.css'

export default function ProductList() {
  return (
    <div className="w-auto m-0 productList">
          <div className="productList">
            <h1 className="grid justify-center mb-4 text-4xl">Products</h1>
          </div>
          <div className="productList_container">
            <div className="product_type w-64 h-64 mt-4 mb-4 border border-gray-300">
              <Link to="/body">
                <img src={Body} />
              </Link>
            </div>
            
            <div className="product_type w-64 h-64 mt-4 mb-4 border border-gray-300">
              <Link to="/headjoints">
                <img src={Headjoint} />
              </Link>
            </div>
            
          </div>
      </div>
  )
}
