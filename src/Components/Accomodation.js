import React,{ useState } from 'react'
import ImgCardGallery from './ImgCardGallery'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import ButtonTag from './ButtonTag'

const Accomodation = ({acco}) => {

    const [curr,setCurr] = useState(undefined)
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=(e, id ) =>{
     let curr = id;
     setCurr(id)
     
    //console.log("metodo", curr)
    //console.log("test",e.target)
      setShow(true)
      
       
    }

    return (
        acco.map((el2,i)=>{
            //console.log(el2)
            return(
            <div key={el2.id}>
                
            <div>
          
              <div className="row mt-4">
              <div className="col-md-6 mt-2">
                <div className="container-gallery">
                <ImgCardGallery img2={el2.images}/> 
                </div>
              </div>

              <div className="col-md-5 accdialog">
                
                <div role="button" onClick={e=>handleShow(e,el2.id)}>
                  <div><strong>{el2.name}</strong></div>
                <div className="small-text">
                    {el2.description}
                </div>
                <div><br/>
                <a style={{color:'#0063C9'}}>Clicca qui per maggiori dettagli</a></div>
                <ButtonTag tipi={el2.tags} />
                </div>
                </div>
                </div>
                </div>
                

    {el2.id == curr ? 
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{el2.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <>
              <div><strong>{el2.typology}</strong></div>
              <div className="row">
              <div className="col-md-12"><br/>
              <div className="row p-2">
                <ImgCardGallery img2={el2.images}/>
                </div><br/> 
              <p style={{marginTop: 10}}><strong>Descrizione</strong></p>
              <div>{el2.description}</div>
              <p style={{marginTop: 10}}><strong>Ristorante</strong></p>
              <div>{el2.descriptionRestaurant}</div>
              <p style={{marginTop: 10}}><strong>Camere</strong></p>
              <div>{el2.descriptionRooms}</div>
              <p style={{marginTop: 10}}><strong>Servizi</strong></p>
              <div>{el2.descriptionServices}</div> 
              </div>
              </div>
          </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal> : null }

      
            
                </div>)
            
          })  
    )
}

export default Accomodation
