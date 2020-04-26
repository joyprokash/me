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
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                  <p className="text-center"><a className="btn btn-primary" href="#"><i className="fa fa-download"></i> Download Resume</a></p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
