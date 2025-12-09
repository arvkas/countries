import { useTheme } from "../hooks/useTheme";

export default function Header() {
  // const [isDark, setIsDark] = theme;
  const [isDark, setIsDark] = useTheme();
  // JSON.parse(localStorage.getItem('isDarkMode')) // to get boolean
  // if(isDark) {
  //   document.body.classList.add('dark')
  // } else {
  //     document.body.classList.remove('dark')
  // }

  return (
    <header className={`header-container ${isDark ? 'dark':''}`}>
      <div className="header-content">
        <h2 className="title"><a href="/">Where in the world ??</a></h2>
        <p className="theme-changer" onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>
          <i className={`fa-solid fa-${!isDark ? 'moon': 'sun'}`}></i>
          &nbsp;&nbsp;{`${!isDark ?'Dark':'Light'}`} Mode
        </p>
      </div>
    </header>
  )
}
