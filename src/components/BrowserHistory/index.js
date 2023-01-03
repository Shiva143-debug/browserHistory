import './index.css'

const BrowserHistory = props => {
  const {BrowserDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = BrowserDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <div className="app-container">
      <li className="list-container">
        <div className="container">
          <div className="card">
            <p className="para">{timeAccessed}</p>
            <div className="button-container">
              <img src={logoUrl} alt="domain logo" className="image" />
            </div>
            <p className="para">{title}</p>

            <p className="para">{domainUrl}</p>

            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="DeleteButton"
              onClick={onDelete}
            />
          </div>
        </div>
      </li>
    </div>
  )
}
export default BrowserHistory
