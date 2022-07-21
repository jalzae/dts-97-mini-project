function Footer() {
  return (<div className="footerClass">
    <div className="container">
      <div className="row footerItem">
        <div className="col-lg-3">
          <ul>
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Security</li>
            <li>Contact Us</li>
            <li> <button className='btn btn-outlined border-dark rounded-0 text-secondary'>Service Code</button></li>
            <li className="footer-title">&copy; 2021 Movies, All Right Reserved</li>
          </ul>

        </div>
        <div className="col-lg-3">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Provisions</li>
          </ul>

        </div>
        <div className="col-lg-3">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

        </div>
        <div className="col-lg-3">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>

        </div>
      </div>
    </div>
  </div>)
}

export default Footer;