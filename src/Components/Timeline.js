import React from 'react'

 const Timeline = ({day}) => {
    return (
        <div className="white">
            <div className="day d-flex align-items-center justify-content-center">
                <p className="rob m-0 text-white text-uppercase">Day <span className="font-weight-bold">{day}</span></p>
            </div>
            <div className="pinmap pin col-md-12 text-center"><i className="fa fa-map-marker" aria-hidden="true"></i></div>  
            <div className="pin pinnoleggio_auto col-md-12 "><i className="fa fa-car" aria-hidden="true"></i>
        </div>
        </div>
    )
}
export default Timeline
