import React from "react";
import './Button.css'

export default props => {
  let style = 'button '
  style += props.operation ? 'operation' : ''
  style += props.double ? ' double' : ''
  style += props.triple ? ' triple' : ''
  return (
    <button
      onClick={e => props.click && props.click(props.label)}
      className={style} >
      { props.label}
    </button >
  )
}