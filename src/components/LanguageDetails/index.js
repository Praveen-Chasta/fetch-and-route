import {Link} from 'react-router-dom'
import './index.css'

const LanguageDetails = props => {
  const {details} = props
  const {name, logoUrl, id} = details

  return (
    <ul className="ul-cont">
      <Link to={`/courses/${id}`}>
        <li className="item">
          <div className="k">
            <img src={logoUrl} alt="name" className="img" />
            <h1 className="h-1">{name}</h1>
          </div>
        </li>
      </Link>
    </ul>
  )
}

export default LanguageDetails
