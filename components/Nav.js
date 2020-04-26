import { Component } from 'react';
import Link from 'next/link'

export default class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <nav className="navbar navbar-custom">
                    <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
                        <Link href="/index"><a className="navbar-brand page-scroll" href=""  style={{ textTransform: 'uppercase' }}>Joyprokash Chakrabarty</a></Link> </div>
                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul className="nav navbar-nav">
                        <li className="hidden"> <a href="#page-top"></a> </li>
                        <li> <Link href="/index"><a href="" className="page-scroll" >Home</a></Link></li>
                        <li> <Link href="/education"><a href="" className="page-scroll">Education</a></Link> </li>
                        <li> <Link href="/experience"><a href="" className="page-scroll" >Experience</a></Link> </li>
                        <li> <Link href="/contact"><a  href="" className="page-scroll" >Contact</a></Link></li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        );
    }
}