import React from 'react'
import Globals from '../config/config'

function FormContact() {
    const succesSend = () => {
        let modal = document.getElementById('modal-thanks')
        modal.style.display = "block"   
    }

    return (
        <div className="form-contact-cont row">
            <div class="row col s6">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons-round prefix">account_box</i>
                            <input id="first_name" type="text" class="validate"/>
                            <label for="first_name">Nombre</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons-round prefix">assignment_ind</i>
                            <input id="last_name" type="text" class="validate"/>
                            <label for="last_name">Apellido</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons-round prefix">alternate_email</i>
                            <input id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <i class="material-icons-round prefix">subject</i>
                            <input id="subject" type="text" class="validate"/>
                            <label for="subject">Asunto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div class="input-field col s12">
                            <i class="material-icons-round prefix">message</i>
                            <textarea id="message" class="materialize-textarea"/>
                            <label for="message">Mensaje</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            <button type="button" onClick={succesSend} className="btn waves-effect waves-light deep-purple lighten-2 btn-send-mail">Enviar
                                <i className="material-icons-round right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row col s6 offset-12 send-mail-right">
                <h4>Escríbeme y nos pondremos en contacto</h4>
                <img className="send-mail-img" src={Globals['cdn-image']+'1PSMyOktwFpf74HdYuVau1e92774rpTkv'} alt=""/>
            </div>
        </div>
    )
}

export default FormContact
