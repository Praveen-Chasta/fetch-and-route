import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <h1 className="n-heading">Oops! Something Went Wrong </h1>
    <p className="n-para">
      We Cannot seem to find the page you are looking for
    </p>
    <Link to="/">
      <button type="button" className="button">
        Retry
      </button>
    </Link>
  </div>
)

export default NotFound
