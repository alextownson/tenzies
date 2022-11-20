import './styles/main.css'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'

function App() {
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)