import Layout from './../components/layout'
import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default class Contact extends Component {
    
  constructor()
  {
      super();
      this.state = {
          name:'',email:'',error:'',token:'',loader:'false',message:'',nameError:'',emailError:'',messageError:'',success:''
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.ValidateEmail = this.ValidateEmail.bind(this);
  }

  ValidateEmail(mail) 
  {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(mail).toLowerCase()))
      {
         return true;
      }
      else
      {
         return false;
      }
  }

  
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    
    if(value == '')
    {
      this.setState({[name+'Error']: `${name} is required`});
      this.setState({[name]: value});
    }else
    {
      this.setState({[name]: value});
      this.setState({[name+'Error']: ''});
      if(name === 'email')
      {
          if(this.ValidateEmail(value)){
            this.setState({'emailError': ''});
          }else{
            this.setState({'emailError':'You have entered an invalid email address!'});
          }
      }
      
    }
    
  }

onSubmit(event){
    
    if(this.state.name != '' && this.state.email != '' && this.state.message != '')
    { 
          if(this.ValidateEmail(this.state.email)){
              this.setState({loader: 'true'});
              const param = {name: this.state.name,email: this.state.email,message: this.state.message};
              axios.post('https://api.joyprokash.com/send/mail.php', param)
              .then(response => { 
                  if(response.data.status == 'sent')
                  {
                      this.setState({loader: 'false'});
                      this.setState({success: 'Mail has been sent !', name: '', email:'', message:''});
                  }
                  else
                  {
                      this.setState({loader: 'false'});
                      this.setState({error: 'Something went wrong'});
                  } 
              });
          }else{
              this.setState({'emailError':'You have entered an invalid email address!'});
          }
           
    }else{
          if(this.state.name == '')
          {
            this.setState({nameError: `Name is required`});
          }

          if(this.state.email == '')
          {
            this.setState({emailError: `Email is required`});
          }

          if(this.state.message == '')
          {
            this.setState({messageError: `Message is required`});
          }
    }
    event.preventDefault();
}

  render() {
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
                  <p>mail@joyprokash.com</p>
                </div>
                <div className="col-md-4"> <i className="fa fa-phone fa-2x"></i>
                  <p> +88 01737 014055</p>
                </div>
              <div className="clearfix"></div>
            </div>
            <div className="col-md-8 col-md-offset-2" >
              <h3>LEAVE ME A MESSAGE</h3>
              <form onSubmit={this.onSubmit} id="contactForm" noValidate>
              <p className="help-block text-danger">{this.state.error}</p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" value={this.state.name} onChange={this.handleInputChange}  name="name" className="form-control" placeholder="Name*" required="required" />
                      <p className="help-block text-danger">{this.state.nameError}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" value={this.state.email} onChange={this.handleInputChange}  name="email" className="form-control" placeholder="Email*" required="required" />
                      <p className="help-block text-danger">{this.state.emailError}</p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" value={this.state.message} onChange={this.handleInputChange} name="message" className="form-control" rows="4" placeholder="Message*" required></textarea>
                  <p className="help-block text-danger">{this.state.messageError}</p>
                </div>
                <div id="success">{ this.state.success }</div>
                {(() => {
                  switch (this.state.loader) {
                    case 'false':   return (
                      <button type="submit" className="btn btn-default">Send Message</button>
                    );
                    case 'true': return(
                      <div style={{"textAlign": "center"}}>
                        <Loader type="ThreeDots" color="#111010" height={50} width={50} visible={true} />
                      </div>
                    ); 
                  }
                 })()}
                
              </form>
              <div className="social">
                <ul >
                  <li><a href="https://facebook.com/joyprokash.me" target="_blank"><i className="fa fa-facebook" title="facebook"></i></a></li>
                  <li><a href="https://github.com/joyprokash" target="_blank"><i className="fa fa-github" title="github"></i></a></li>
                  <li><a href="https://www.instagram.com/joyprokash_ch" target="_blank"><i className="fa fa-instagram" title="instagram"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/joyprokash/" target="_blank" ><i className="fa fa-linkedin" title="linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </Layout>
      );
  }
}