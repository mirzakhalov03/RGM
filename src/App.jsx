import { ToastContainer } from 'react-toastify'
import './App.css'
import ScrollToTop from './components/scrollToTop/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css';
import RouteController from './routes'

function App() {

  return (
    <>
      <ToastContainer/>
      <ScrollToTop/>
      <RouteController/>
    </>
  )
}

export default App
