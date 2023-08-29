import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Emend from "./Emend"; //importar los componentes
import Checkup from "./Checkup";
import Buy from "./Buy";
import Sell from "./Sell";
import Funds from "./Funds";
import Statuslist from "./Statuslist";
import "../styles.css"; //estilos-hoja general

const Menu = (props) => {
  //ayudan a controlar el estado de los componentes llamados
  const [emend, setEmend] = useState("");
  const [checkup, setCheckup] = useState("");
  const [buy, setBuy] = useState("");
  const [sell, setSell] = useState("");
  const [funds, setFunds] = useState("");
  const [status, setStatus] = useState("");

  //Para las opciones del menu principal
  function op_emend() {
    setEmend("1");
    setCheckup("0");
    setBuy("0");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_checkup() {
    setEmend("0");
    setCheckup("1"); //Visible en pantalla
    setBuy("0");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_buy() {
    setEmend("0");
    setCheckup("0");
    setBuy("1");
    setSell("0");
    setFunds("0");
    setStatus("0");
  }

  function op_sell() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setSell("1");
    setFunds("0");
    setStatus("0");
  }

  function op_funds() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setSell("0");
    setFunds("1");
    setStatus("0");
  }

  function op_status() {
    setEmend("0");
    setCheckup("0");
    setBuy("0");
    setSell("0");
    setFunds("0");
    setStatus("1");
  }

  function cerrarSesion() {
    document.getElementById("caja_menu").style.display = "none";
    alert("Finalizando sesion... ¡Hasta luego!");
    document.getElementById("form_login").style.display = "block";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("pin").value = "";
  }

  return (
    <div id="caja_menu">
      <nav className="sidebar">
        <div className="logo">
          <span class="material-symbols-rounded">brightness_5</span>
          <h2>Sunny Bank</h2>
        </div>
        <NavLink className="links" to="" onClick={op_emend}>
          <li>
            <span class="material-symbols-rounded">encrypted</span>
          </li>
        </NavLink>
        <NavLink className="links" to="" onClick={op_checkup}>
          <li>
            <span class="material-symbols-rounded">
              production_quantity_limits
            </span>
          </li>
        </NavLink>
        <NavLink className="links" to="" onClick={op_buy}>
          <li>
            <span class="material-symbols-rounded">storefront</span>
          </li>
        </NavLink>
        <NavLink className="links" to="" onClick={op_sell}>
          <li>
            <span class="material-symbols-rounded">table_rows</span>
          </li>
        </NavLink>
        <NavLink className="links" to="" onClick={op_funds}>
          <li>
            <span class="material-symbols-rounded">savings</span>
          </li>
        </NavLink>
        <NavLink className="links" to="" onClick={op_status}>
          <li>
            <span class="material-symbols-rounded">table_chart</span>
          </li>
        </NavLink>
        <li>
          <a className="links" href=" " onClick={cerrarSesion}>
            <span class="material-symbols-rounded">tab_move</span>
          </a>
        </li>
      </nav>
      <h2 className="saludo"> Bienvenida/o {props.nombre}</h2>
      {/*Que componentes se muestran, por eleccion*/}
      {emend === "1" && <Emend />}
      {checkup === "1" && <Checkup />}
      {buy === "1" && <Buy />}
      {sell === "1" && <Sell />}
      {funds === "1" && <Funds />}
      {status === "1" && <Statuslist />}
    </div>
  );
};

export default Menu;
