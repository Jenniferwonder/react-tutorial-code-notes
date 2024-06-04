import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export function ContextProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState('')
  const [screenSize, setScreenSize] = useState(undefined)
  const [currentColor, setCurrentColor] = useState('#03C9D7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClicked] = useState(initialState)

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
  }

  const handleClick = clicked =>
    setIsClicked({ ...initialState, [clicked]: true })

  const toggleMenu = (value) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value
    })
  }

  return (
    <StateContext.Provider
      value={{
			  isClicked,
			  currentColor,
			  currentMode,
			  activeMenu,
			  screenSize,
			  initialState,
			  themeSettings,
        currentMenu,
        toggleMenu,
			  handleClick,
			  setScreenSize,
			  setIsClicked,
			  setActiveMenu,
			  setCurrentColor,
			  setCurrentMode,
			  setMode,
			  setColor,
			  setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
