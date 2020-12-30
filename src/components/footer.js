import React from 'react'
import Globals from '../config/config'

function Footer() {
    return (
            <footer className="page-footer grey lighten-5">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="grey-text darken-4-text">JASS</h5>
                            <p className="grey-text darken-4-text">July Andréa Suárez - SoftWare Developer</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="grey-text darken-4-text">Visítame también en</h5>
                            <div className="foot-social-cont">
                                <a target="blank" href="https://www.linkedin.com/in/july-suarez-50573a96"><img src={Globals['cdn-image']+'10Kve55TrieM9chLNMsQHtj41CFRAqIjv'} alt=""/></a>
                                <a target="blank" href="https://github.com/julyevg/"><img src={Globals['cdn-image']+'1yHS60itJ_yk6bMQ49UTbbh5bVTBy1_tw'} alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="footer-copyright">
                        <div className="container grey-text darken-4-text">
                            2020 Todos los derechos reservados - © Copyright
                        </div>
                    </div>
            </footer>
    )
}

export default Footer
