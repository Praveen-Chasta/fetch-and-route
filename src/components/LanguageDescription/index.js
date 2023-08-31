import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class LanguageItems extends Component {
  state = {
    languageDetailList: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getLanguagesDetails()
  }

  getLanguagesDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const responseUrl = await fetch(url, options)
    if (responseUrl.ok === true) {
      const languageData = await responseUrl.json()
      console.log(languageData)
    }
  }

  renderSuccessView = () => (
    <div>
      <h1>Krishna</h1>
    </div>
  )

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
      <button>Retry</button>
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
          <div>
            <h1>Krishna</h1>
            {this.renderCourseDetails()}
          </div>
        </div>
      </>
    )
  }
}

export default LanguageItems
