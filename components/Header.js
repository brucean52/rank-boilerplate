import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <div className="container">
      <ul>
        <li>
          <Link prefetch href='/'>
            <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
          </Link>
        </li>
        <li>
          <Link prefetch href='/test'>
            <a className={pathname === '/about' ? 'is-active' : ''}>Test</a>
          </Link>
        </li>   
      </ul>
    </div>
    <style jsx>{`
      header {
        background: grey;
        padding: 0.5rem 1rem;
      }
      ul > li {
        list-style: none;
        display: inline-block;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
)

export default withRouter(Header)