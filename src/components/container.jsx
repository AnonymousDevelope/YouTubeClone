import React from 'react'

const container = ({children, className, ...props}) => {
  return (
    <div className={"container-tube"+(className ? " "+className : "")} {...props}>
      {children}
    </div>
  )
}

export default container