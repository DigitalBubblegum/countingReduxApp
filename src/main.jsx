import ReactDOM from 'react-dom/client'
import App from './App'
import { CounterContextProvider } from './CounterContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>)
}

renderApp()