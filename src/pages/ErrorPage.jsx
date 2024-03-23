import { Link } from "react-router-dom"

function ErrorPage() {
    return (
      <div className="error-page">
        <h1>Oops! It looks like you are lost.</h1>
        <Link className="home-link" to="/">
          Maybe you are looking for this page?
        </Link>
      </div>
    )
}

export {ErrorPage}
  
