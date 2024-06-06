import Logo from '../images/topbar__logo-img.png'
import { mainLinks } from '../data'

const Topbar = () => {
  return (
    <div className="secondaryTopbar">
      <div className="secondaryTopbar__inner">
        <div className="secondaryTopbar__inner__logo">
          <a href="/">
            <img
              className="topbar__inner__logo-img"
              src={Logo}
              alt="EVMS Logo"
            />
          </a>
        </div>
        {/* <!--topbar__logo ends--> */}

        <nav
          className="secondaryTopbar__inner__nav"
          aria-label="Secondary Navigation"
        >
          <ul className="secondaryTopbar__inner__nav__ul">
            {mainLinks.map((mainLink) => {
              const { id, name, href } = mainLink
              return (
                <li className="secondaryTopbar__inner__nav__ul-li" key={id}>
                  <a href={href} target="_self">
                    {name}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        {/* <!--secondaryTopbar__inner__nav ends--> */}

        <div className="secondaryTopbar__inner__search">
          {/* <!--img className="secondaryTopbar__inner__search-icon" src="/media/minus_9_to_5_media/images/search-icon-blk.png" /--> */}
        </div>
      </div>
      {/* <!--secondaryTopbar__inner ends--> */}
    </div>
  )
}
export default Topbar
