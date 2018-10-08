import React from 'react'

const Page = ({ children, title }) => {
  return (
    <div className="page">
      <h1 className="page-title">{title}</h1>
      {children}
    </div>
  )
}
export default Page
