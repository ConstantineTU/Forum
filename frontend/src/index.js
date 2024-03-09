import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './app/app'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
