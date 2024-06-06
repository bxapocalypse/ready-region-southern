const MobilTopbar = () => {
  return (
    <div className="mobilTopBar">
      <div className="mobilTopBar__logo">
        <a
          href="/"
          className="mobilTopBar__logo-link"
          aria-label="Click to go back to the homepage"
        >
          <img
            className="mobilTopBar__logo-link-img"
            src="/media/minus_9_to_5_media/images/topbar__logo-img.png"
            alt="EVMSmobile logo"
          />
        </a>
      </div>
      {/* <!--mobilTopBar__logo ends--> */}
      <button className="mobilTopBar__menuToggle">
        <img
          className="mobilTopBar__menuToggle-img"
          src="/media/minus_9_to_5_media/images/three-line-menu-icon-24.jpg"
          aria-label="Open Mobile Menu"
          alt="Menu Toggle"
        />{' '}
        MENU
      </button>
    </div>
  )
}
export default MobilTopbar
