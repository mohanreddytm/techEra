import './index.css'

const ErrorOne = props => {
  const {getClickedOne} = props

  const onClickRetryButton = () => {
    getClickedOne()
  }
  return (
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
        onClick={onClickRetryButton}
        className="error-retry-button"
        type="button"
      >
        Retry
      </button>
    </div>
  )
}
export default ErrorOne
