import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Galleria from './Galleria'
import { set } from 'js-cookie'

const ImgCardGallery = ({ img2 }) => {
    const [curr,setCurr] = useState(undefined)
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=(e, id ) =>{
     setCurr(id)
     setShow(true)
      
       
    }


    return (
        img2.map((el1,i)=>{
            return(
                <>
            {el1.image != null ?
            <div key={el1.id} role="button" onClick={e=>handleShow(e,el1.id)} className="container-image" style={{
                    backgroundImage: `url(${el1.image})`,width:150, marginTop:5}}>
                      </div>   
            : null }
        

            {el1.id == curr ? 
            
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    
                     <>

                     <div key={el1.id}>
                         <img src={el1.image} style={{width:"100%"}}/>
                         <div className="row">
                         <Galleria img={img2}/>
                         </div>
                         
                 

                         

                         


                         
                     </div>
                     </>
                    </>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Chiudi
                  </Button>
                </Modal.Footer>
              </Modal>
               :  null }
              </>
          )})  

                         
     
    )
}

export default ImgCardGallery
