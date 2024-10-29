import React from 'react'

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column" style={{height: '100vh'}}>
        <img src="404.jpg" alt="" style={{width: '80%'}} />
        <h2>Page Not Found !</h2>
        <p>The resource you are looking for does not exists</p>
    </div>
  )
}
