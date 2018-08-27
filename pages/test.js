import App from '../components/App'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
    <App>
      <Header/>
      <div className="container">
        <div className="headline">
          <h1>Test Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, accusantium.</p>

          <h1>Test Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, accusantium.</p>

          <h1>Test Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, accusantium.</p>
        </div>
        <div className="sidebar">
        <h3>sidebar info</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <Footer/>
    


    <style jsx>{`
      .container {
        display: flex;
        min-height: 80vh;
        border: solid 1px blue;
      }
      .headline {
        width: 75%;
        border: solid 1px red;
      }

      .sidebar {
        width: 25%;
        text-align: right;
        border: solid 1px green;
      }

      // Small devices (landscape phones, 576px and up)
      @media (min-width: 576px) { 
        
      }

      // Medium devices (tablets, 768px and up)
      @media (min-width: 768px) { 
        
      }

      // Large devices (desktops, 992px and up)
      @media (min-width: 992px) { 
        
      }

      // Extra large devices (large desktops, 1200px and up)
      @media (min-width: 1200px) { 

      }
    `}</style>
    </App>
)