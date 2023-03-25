import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="container">
      <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1>404</h1>
        <h2>The page you are looking htmlFor doesn't exist.</h2>
        <Link className="btn" to='/'>Back to home</Link>
        <img src="assets/img/not-found.svg" className="img-fluid py-5" alt="Page Not Found" />
      </section>
    </div>
  )
}

export default NoPage