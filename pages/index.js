import Layout from './../components/layout'

export default function Home() {
  return (
    <Layout>
      <div id="about">
        <div className="container">
        {/* <div className="section-title text-center center"><hr /></div> */}
          <div className="row">
              <div className="col-md-12 text-center"><img src="img/about.jpg" className="img-responsive" /></div>
              <div className="col-md-8 col-md-offset-2">
                <div className="about-text">
                  <h3>Hi There,</h3>
                  <p>I’m Joy, a Developer from the Bangladesh.I have a strong desire to be better, an instinct for clean code, a strong ambition to make a difference on the web . I have 5++ years of experience in Backend Development. I am Well-versed in numerous programming languages including Python, PHP, ReactJs, JavaScript . I also have brief Knowledge on Famous Frameworks ( Laravel, Django, Yii ) .</p>
                  <div className="social">
                    <ul className="text-center">
                      <li><a href="https://facebook.com/joyprokash.me" target="_blank"><i className="fa fa-facebook" title="facebook"></i></a></li>
                      <li><a href="https://github.com/joyprokash" target="_blank"><i className="fa fa-github" title="github"></i></a></li>
                      <li><a href="https://www.instagram.com/joyprokash_ch" target="_blank"><i className="fa fa-instagram" title="instagram"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/joyprokash/" target="_blank" ><i className="fa fa-linkedin" title="linkedin"></i></a></li>
                    </ul>
                  </div>
                  <p className="text-center">
                    <a className="btn btn-primary" href="#"><i className="fa fa-download"></i> Download Resume</a>
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
