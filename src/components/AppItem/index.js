// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, appLink} = appDetails

  return (
    <li className="app-con">
      <a href={appLink} rel="noreferrer" target="_blank">
        <img className="app-img" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </a>
    </li>
  )
}

export default AppItem
