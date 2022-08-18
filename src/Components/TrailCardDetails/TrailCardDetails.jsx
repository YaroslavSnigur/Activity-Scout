import React from 'react';
import "./TrailCardDetails.css"

function TrailCardDetails(props) {
    return (
        <div className="details-popup" style={{ display: props.showDetails ? "flex" : "none" }}>
            <div className="details-container">
                <div className='details-header-container'>
                    <div className='details-header-text'>{props.LocationName}</div>
                    <div><div className="details-close-button-container" onClick={() => { props.setShowDetails({ showDetails: false }); }}>Close</div></div>
                </div>
                <div className="details-data-container">

                    <div className="details-row">
                        <div className="details-row-label">Address:</div>
                        <div>{props.Address}</div>
                    </div>
                    <div className="details-row">
                        <div className="details-row-label">Description:</div>
                        <div>{props.Description}</div>
                    </div>
                    <div className="details-row">
                        <div className="details-row-label">Tags:</div>
                        <div>{props.Tags}</div>
                    </div >

                    <div className="details-row">
                        <div className="details-row-label">Fee:</div>
                        <div>${props.Fee}</div>
                    </div>
                    <div className="details-row">
                        <div className="details-row-label">Reviews:</div>
                    </div>
                    <div className="details-row-bottom">
                        <div className="details-reviews"></div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TrailCardDetails