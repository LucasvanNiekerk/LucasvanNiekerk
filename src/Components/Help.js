import React from 'react';

export const Help = () => {
    return (
        <div style={{ paddingLeft: "10px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-1" />
                    <div className="col-10">
                        <h2 style={{ textAlign: "center" }}>Help page</h2>
                        
                        <p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/4o6lVyI1DVU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="myFrame"/></p>
                    </div>
                    <div className="col-1" />
                </div>
            </div>
        </div>
    )
}