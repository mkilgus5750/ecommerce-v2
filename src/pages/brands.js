import React from "react"
import { Link } from "gatsby"
import MiyazawaLogo from "../images/miyazawa_logo.png"
import MuramatsuLogo from "../images/murumatsu_logo.jpeg"
import SankyoLogo from "../images/sankyo_logo.jpg"
import './brands.css'

export default function brands() {
  return (
      <div className="w-auto m-0 brands">
          <div className="brands_header">
            <h1 className="grid justify-center mb-4 text-4xl">All Brands</h1>
          </div>
          <div className="brands_container"> 
              <div className="brand w-64 h-64 mt-4 mb-4  ">
                <Link to="/miyazawa">
                  <img src={MiyazawaLogo} alt="Link to Miyazawa Products"/>
                </Link>
              </div>
            <div className="brand w-64 h-64 mt-4 mb-4  ">
              <Link to="/muramatsu">
                <img src={MuramatsuLogo} alt="Link to Muramatsu Products"/>
              </Link>
            </div>
            <div className="brand w-64 h-64 mt-4 mb-4  ">
              <Link to="/sankyo">
                <img src={SankyoLogo} alt="Link to Sankyo Products"/>
              </Link>
            </div>
          </div>
      </div>
  )
}
