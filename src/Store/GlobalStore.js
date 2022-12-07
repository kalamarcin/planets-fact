import { useState, createContext } from 'react'

export const GlobalStoreContext = createContext({
  sidebar: '',
  changeSidebar: () => {},
  handleFalse: () => {},
})

const GlobalStore = props => {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleFalse = () => {
    setSidebar(false)
  }

  const providerValue = {
    sidebar,
    changeSidebar: handleSidebar,
    handleFalse,
  }

  return <GlobalStoreContext.Provider value={providerValue}>{props.children}</GlobalStoreContext.Provider>
}

export default GlobalStore
