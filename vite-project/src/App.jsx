import './App.css'
import Card from './components/Card/Card'
import CurrentDateTime from './components/CurrentDateTime/CurrentDateTime'
import Header from './components/Header/Header'
import ThemeButton from './components/ThemeButton/ThemeButton'

function App() {

  return (
    <>
    <Header />
    <h1>Vite+React初期状態</h1>
    <Card />
    <CurrentDateTime />
      {/* <ThemeButton /> */}
    </>
  )
}

export default App
