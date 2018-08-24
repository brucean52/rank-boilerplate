import App from '../components/App'
import Header from '../components/Header'

export default () => (
  <div className="wrapper">
    <App>
      <Header/>
      <div className="container">
      
      </div>
    </App>


    <style jsx>{`
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
        // .wrapper {
        //   margin: 0;
        //   display: grid;
        //   grid-template-columns: repeat(3, 1fr); 
        //   grid-template-rows: 100px 75vmin 200px; 
        // }
        .container {
          grid-column: span 12;
          border: solid 1px blue;
        }
      }
    `}</style>
  </div>
)