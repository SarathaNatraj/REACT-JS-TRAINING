import React from 'react'

export default function ViewProfile() {
  return (
    <div className="mt-3">
      <div className="text-center">
        <img src="/images/no-profile-image.jpg" className='rounded-circle border border-info border-2' style={{width: '100px'}} />
        <h4 className="text-light mt-3">Dhiraj Kumar</h4>
        <p><span className="text-info">Dhiraj.Kumar@niit.com</span> <span className="text-light">910 Followers</span></p>
        <button className="btn btn-outline-info rounded-pill px-4 py2">Follow</button>
      </div>
      <div>
        <p className="text-light">ABOUT</p>
        <p className="text-light">Fullstack Developer in MEAN/MERN and .NET Technologies</p>
        <p className="text-info">STUDY ROOMS <b>Dhiraj Kumar</b> PARTICIPATES IN</p>
      </div>
    </div>
  )
}
