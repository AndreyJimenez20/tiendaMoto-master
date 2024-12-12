import React, {useState} from "react";
import FuncionesAdmin from "../components/FuncionesAdmin";

export default function PaginaAdmin (){

    const[infoCliente,setInfoCliente]=useState(false)

    return(
        <div>
             
           <FuncionesAdmin/>
         
        </div>
    )
}