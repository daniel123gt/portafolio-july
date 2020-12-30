import React from 'react'
import Globals from '../config/config'

function Error() {
    return (
        <div className="container error-cont main">
            <h2>Ups, cavernicola no encontrar nada :(</h2>
            <img className="responsive-img" src={Globals['cdn-image']+'1ceiYYS74CksyTGAQ8OXNVa5yyDMX-SBw'} alt="404" width="40%"/>
        </div>
    )
}

export default Error
