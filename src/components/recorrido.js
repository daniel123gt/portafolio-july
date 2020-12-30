import React from 'react'
import Globals from '../config/config'

function Recorrido() {
    return (
        <div className="jobs-home-cont container">
            <div className="jobs-home-head">
                <h3>Mi Recorrido</h3>
            </div>
            <div className="jobs-home-body row">
                <img className="col m3 s12" src={Globals['cdn-image']+'1mqpa2JyI6VKgDoMljPTKWoz9Tu4SJHYm'} alt=""/>
                <img className="col m3 s12" src={Globals['cdn-image']+'1T93lceffbZswz1od6_18sJjofioDgW_g'} alt=""/>
                <img className="col m3 s12" src={Globals['cdn-image']+'1Ctrumxn410RwNp_HXPktDDQSkPpEGx5K'} alt=""/>
                <img className="col m3 s12" src={Globals['cdn-image']+'19V1vRtiaAmgITA8QfxNNKSO-4J_UoXDZ'} alt=""/>
            </div>
            <div className="jobs-home-foot">
                <a className="" href="#"><i className="material-icons-round">add</i>Saber más</a>
            </div>
        </div>
    )
}

export default Recorrido
