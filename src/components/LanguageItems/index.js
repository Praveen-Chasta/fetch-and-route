import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageDetails from '../LanguageDetails'
import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class LanguageItems extends Component {
  state = {
    languageList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getLanguages()
  }

  getLanguages = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      const updatedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        logoUrl: eachCourse.logo_url,
        name: eachCourse.name,
      }))
      this.setState({
        languageList: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    }
  }

  renderSuccessView = () => {
    const {languageList} = this.state

    return (
      <ul className="ul-container">
        {languageList.map(each => (
          <LanguageDetails key={each.id} details={each} />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        className="f-img"
        alt="failure view"
      />
      <h1 className="f-heading">Oops! Something Went Wrong </h1>
      <p className="f-para">
        We Cannot seem to find the page you are looking for
      </p>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderCourseDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <div className="bg-container">
          <div className="top-view">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
              className="website-logo"
              alt="website logo"
            />
          </div>
          <h1 className="heading">Courses</h1>
          {this.renderCourseDetails()}
        </div>
      </>
    )
  }
}

export default LanguageItems
