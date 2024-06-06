const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a href="/">
          {/* <img src="images/topbar__logo-img.png" alt="EVMS logo" className="footer__top-logo"> */}
        </a>
        <div className="footer__top-txt">
          Minus 9 to 5 is a collective impact initiative of the M. Foscue Brock
          Institute for Community and Global Health, housed in the Department of
          Pediatrics, Eastern Virginia Medical School.
        </div>
        {/* <!--footer__top-txt ends--> */}
      </div>
      <div className="footer__threebox">
        <div className="footer__threebox-box">
          <h5 className="footer__threebox-box-title">NOTEWORTHY NEWS</h5>
          <a
            href="/resources/news/minus9to5monthlymemo-march2024newsletter.html"
            className="footer__threebox-box-link"
          >
            Minus 9 to 5 Monthly Memo- March 2024 Newsletter
          </a>

          <a
            href="/resources/news/governorglennyoungkinannouncesthatvirginiawillmakeasignificantinvestmentinearlylearningandchildcare.html"
            className="footer__threebox-box-link"
          >
            Governor Glenn Youngkin announces that Virginia will make a
            significant investment in early learning and childcare
          </a>

          <a
            href="/resources/news/despitesuccessvapublic-privateprogramforearlychildhoodcarestillfarfrommeetingneed.html"
            className="footer__threebox-box-link"
          >
            Despite success, Va. public-private program for early childhood care
            still far from meeting need
          </a>
        </div>
        <div className="footer__threebox-box">
          <h5 className="footer__threebox-box-title">SOCIAL</h5>
          <p className="footer__threebox-box-p">
            <a
              href="https://www.facebook.com/minus9to5ece"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/m9t5_readyregionsoutheastern/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </p>

          <a
            href="https://www.givecampus.com/campaigns/2163/donations/new"
            className="footer__threebox-box-btn"
            aria-labelledby="Make a gift"
          >
            MAKE A GIFT
          </a>
        </div>
        <div className="footer__threebox-box" aria-labelledby="contact form">
          <div>
            <h5 className="footer__threebox-box-title">CONTACT US</h5>
            <p className="footer__threebox-box-p">
              <a
                href="https://goo.gl/maps/TXSAkhfD7wmQgMc76"
                target="_blank"
                rel="noreferrer"
              >
                <span className="bold__font">Minus 9 to 5</span>
                Eastern Virginia Medical School
                <br />
                E.V. Williams Hall
                <br />
                855 W. Brambleton Avenue
                <br />
                Norfolk, VA 23510
              </a>
              <br />
              <br />
              <span className="bold__font">
                Phone:{' '}
                <a
                  href="tel:757-446-7468"
                  itemProp="tel"
                  target="_blank"
                  rel="noreferrer"
                >
                  757.446.7468
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="footer__sub">
        Minus 9 to 5 · &#169; <span className="footer-year"></span>
      </div>
    </footer>
  )
}
export default Footer
