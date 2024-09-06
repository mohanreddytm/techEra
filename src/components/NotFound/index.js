import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="error-main-cont">
      <img
        className="error-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="error-head">Page Not Found</h1>
      <p className="error-desc">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
