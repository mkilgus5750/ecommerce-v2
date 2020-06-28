import React from 'react'
import './Items.css'

export default function Items({ children, title }) {
  return (
    <div>
      <h1 className="text-4xl text-center">{title}</h1>
      <div className="items_grid_container">{children}</div>
    </div>
  )
}
