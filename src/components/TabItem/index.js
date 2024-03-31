// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const changeActiveTab = () => {
    changeTab(tabId)
  }

  const activeClsName = isActive ? 'active-tab' : ''

  return (
    <li onClick={changeActiveTab}>
      <button type="button" className={`tab ${activeClsName}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
