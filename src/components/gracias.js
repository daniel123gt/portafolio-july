import React from 'react'
import Globals from '../config/config'

function Gracias() {

    const closeSend = () => {
        let modal = document.getElementById('modal-thanks') 
        modal.style.display = "none"
    }
    return (
        <div id="modal-thanks" className="thanks-modal">
            <div className="thanks-cont">
                <div className="thanks-head">
                    <h2>¡Genial!, hemos recibido tu correo</h2>
                    <i onClick={closeSend} className="material-icons-round">close</i>
                </div>
                <br/>
                <img src={Globals['cdn-image']+'1MNgFyEIBdD-kQLOrcuFRIM5FaRTPyRZJ'} alt=""/>
                <p>Gracias por escribir</p>
                <button type="button" className="btn waves-effect waves-light deep-purple lighten-2 btn-send-mail">Ir al inicio
                    <i className="material-icons-round right">house</i>
                </button>
            </div>
        </div>
    )
}

export default Gracias
