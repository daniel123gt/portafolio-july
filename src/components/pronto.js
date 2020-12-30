import React from 'react'
import Globals from '../config/config'

function Pronto() {
    return (
        <div className="container main">
            <div className="pronto-cont">
                <div className="pronto-left">
                    <img src={Globals['cdn-image']+'1OrPFAKCa6TF_B95mhLp3_YGZeh_WJVhN'} alt=""/>
                </div>
                <div className="pronto-center">
                    <h2>¡Hey, espera! Sitio en mantenimiento</h2>
                    <p>Nuestros gatitos están trabajando para que pronto esté listo para tí.</p>
                </div>
                <div className="pronto-right">
                    <img src={Globals['cdn-image']+'185Tndm-lzwH_spnTj92RAp-f-LTGguOH'} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Pronto
