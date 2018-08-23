import App from '../components/App'

export default () => (
  <div className="wrapper">
    <App>
      <div className="header">
      
      </div>
      <div className="container">
      
      </div>
      <div className="footer">
      
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
        .wrapper {
          margin: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr); 
          grid-template-rows: 100px 75vmin 200px; 
        }

        .header {
          grid-column: span 12;
          border: solid 1px red;
        }
        .container {
          grid-column: span 12;
          border: solid 1px blue;
        }
        .footer {
          grid-column: span 12;
          border: solid 1px green;
        }
      }
    `}</style>
  </div>
)