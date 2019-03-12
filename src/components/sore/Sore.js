import React from 'react';
import { Link } from 'react-router-dom';

import './sore.css'


function Sore(props){
    return(
        <div className="soreTitle">
            <Link to ="/">
                <button><h1>SORE</h1></button>
            </Link>
        </div>
    )
}
export default Sore;




