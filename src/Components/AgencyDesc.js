import React,{ useContext } from 'react'
import  {DataContext} from '../Context/DataContext'
import '../index.css'


function AgencyDesc() {
    const datiJson = useContext(DataContext)
    return (
        <div className="container">
        <div className="card">
            <div className="row d-flex">
                <div className="col-lg-4 col-md-12 align-self-end">
                <img src={datiJson.operator.image} style={{width:238}}/>
            </div>
            <div className="col-lg-4 col-md-12 align-self-end">
                <ul style={{marginBottom:0}}>
                    <li style={{listStyle:'none'}}><h3 className="agent">{datiJson.operator.name}</h3></li>
                   
                    <p className="lista1" style={{listStyle:'inside', marginBottom:20}}> Il tuo agente di viaggio</p>
                    <li className="lista1"><i className="fas fa-phone"></i><a href="tel:095931367" style={{color:'#e6a200'}}> {datiJson.operator.contact.phone}</a></li>
                    <li className="lista1"><i className="fas fa-envelope"></i><a href="mailto:info@insicilia.it" style={{color:'#e6a200'}}> {datiJson.operator.contact.email}</a></li>
                </ul>
            </div>
        
            <div className="col-lg-4 col-md-12 align-self-end pdl">
                <img src={datiJson.agency.image} style={{width:100, marginBottom:5}} />
                <br/>
                <p style={{marginBottom:0}} className="lista1">Insolita Travels | Sicily DMC &amp; Travel Agency<br/> (Licence nr. 2226/s2-Turl)<br/>
                    Viale della Gioventù, 26 A - 95014 Giarre (Catania)<br/>
                    www.insicilia.it
                </p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default AgencyDesc