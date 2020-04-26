import Layout from './../components/layout'

export default function Contact() {
  return (
    <Layout>
    <div id="contact" className="text-center">
      <div className="container" style={{ backgroundColor: '#f1f1f1' }} >
        <div className="section-title center"><hr /></div>
        <div className="col-md-8 col-md-offset-2">
          <div className="col-md-4"> <i className="fa fa-map-marker fa-2x"></i>
            <p>Dhaka</p><br/>
          </div>
            <div className="col-md-4"> <i className="fa fa-envelope-o fa-2x"></i>
              <p>info@company.com</p>
            </div>
            <div className="col-md-4"> <i className="fa fa-phone fa-2x"></i>
              <p> +1 123 456 1234</p>
            </div>
          <div className="clearfix"></div>
        </div>
        <div className="col-md-8 col-md-offset-2" >
          <h3>LEAVE ME A MESSAGE</h3>
          <form name="sentMessage" id="contactForm" noValidate>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn btn-default">Send Message</button>
          </form>
          <div className="social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-github"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
