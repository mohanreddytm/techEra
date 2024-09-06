import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import ErrorOne from '../ErrorOne'

import './index.css'

class LanguageDetaile extends Component {
  state = {details: [], status: 'loading'}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({status: 'loading'})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    const jsonOne = await response.json()
    const output = jsonOne.course_details
    const filteredOne = {
      description: output.description,
      id: output.id,
      imageUrl: output.image_url,
      name: output.name,
    }

    if (response.ok) {
      this.setState({details: filteredOne, status: 'success'})
    } else {
      this.setState({status: 'failure'})
    }
  }

  failureOne = () => (
    <div className="error-main-cont">
      <img
        className="error-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="error-head">Oops! Something Went Wrong</h1>
      <p className="error-desc">
        We cannot seem to find the page you are looking for.
      </p>
      <button
        onClick={this.getDetails}
        className="error-retry-button"
        type="button"
      >
        Retry
      </button>
    </div>
  )

  loader = () => (
    <div data-testid="loader" className="loading-main">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successOne = () => {
    const {details} = this.state
    const {description, id, name, imageUrl} = details
    return (
      <div className="detailed-language-cont">
        <img className="detailed-language-image" src={imageUrl} alt={name} />
        <div className="detailed-language-right">
          <h1 className="detailed-language-name">{name}</h1>
          <p className="detailed-language-desc">{description}</p>
        </div>
      </div>
    )
  }

  mainOne = () => {
    const {status} = this.state
    switch (status) {
      case 'loading':
        return this.loader()

      case 'success':
        return this.successOne()

      case 'failure':
        return this.failureOne()

      default:
        return null
    }
  }

  render() {
    const {details} = this.state
    return (
      <>
        <Header />
        <div className="detailed-cont">{this.mainOne()}</div>
      </>
    )
  }
}

export default LanguageDetaile
