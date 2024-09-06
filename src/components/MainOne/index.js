import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import ErrorOne from '../ErrorOne'

import './index.css'

class MainOne extends Component {
  state = {languages: [], status: 'loading'}

  componentDidMount() {
    this.getDetailsOne()
  }

  loader = () => (
    <div data-testid="loader" className="loading-main">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  getDetailsOne = async () => {
    this.setState({status: 'loading'})
    const url = 'https://apis.ccbp.in/te/courses'

    const response = await fetch(url)
    const jsonOne = await response.json()

    if (response.ok) {
      this.setState({languages: jsonOne.courses, status: 'success'})
    } else {
      this.setState({status: 'failure'})
    }
  }

  everyItem = x => {
    const filteredOne = {
      id: x.id,
      logoUrl: x.logo_url,
      name: x.name,
    }

    return (
      <Link
        key={filteredOne.id}
        className="link-normal"
        to={`/courses/${filteredOne.id}`}
      >
        <li className="every-language">
          <img
            className="language-image"
            src={filteredOne.logoUrl}
            alt={filteredOne.name}
          />
          <p className="language-name">{filteredOne.name}</p>
        </li>
      </Link>
    )
  }

  successOne = () => {
    const {languages} = this.state
    return (
      <ul className="list-of-languages-cont">
        {languages.map(each => this.everyItem(each))}
      </ul>
    )
  }

  getClickedOne = () => {
    this.setState({status: 'failure'}, this.getDetailsOne)
  }

  failureOne = () => <ErrorOne getClickedOne={this.getClickedOne} />

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
        return this.loader()
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="lower-cont">
          <h1 className="main-heading">Courses</h1>
          {this.mainOne()}
        </div>
      </>
    )
  }
}

export default MainOne
