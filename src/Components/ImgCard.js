import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const ImgCard = ({ img }) => {
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const [curr,setCurr]=useState(undefined)
    const handleClick = (e , id) => {
        setCurr(id)
        setShow(true)
    }

    const leng = img.length
    let col = ''
    leng > 1 ? col = 'col-md-5 bgimg mr-4' : col = 'col-md-11 bgimg'

    return (
        img.map((el1,i)=>{
            return(
                < >
                
                 <div key={i}  role="button" onClick={e=>handleClick(e,el1.id)} style={{
                    backgroundImage: `url(${el1.image})`,
                    backgroundSize: "cover"}} 
                    className={`${col}`}> 
                 </div>
               
                 
                {el1.id === curr ? 
                <div >
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    
                     <>

                     <div >
                         <img src={el1.image} alt="immagine" style={{width:"100%"}}/>  
                     </div>
                     </>
                    </>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
              </div>
               :  null }
               
                </>)
          })  
    )
} 

export default ImgCard