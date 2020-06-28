import React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer p-4 text-gray-500 bg-gray-50">
      <div className="container mx-auto text-center md:text-lg md:text-left">
        <p className="">Created by Mari Kilgus © 2020</p>
        <a
          className="hover:underline hover:text-gray-700"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:marikilgus@gmail.com"
        >
          marikilgus@gmail.com
        </a>
      </div>
    </footer>
  )
}
