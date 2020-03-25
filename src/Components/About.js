import React from 'react';
import AboutText from '../Utilites/AboutText';



export const About = () => {
    const footerStyle = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        color: "white",
        textAlign: "center",
        paddingBottom: "20px"
    };

    return (
        <div style={{ paddingLeft: "10px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-10">
                        <h2 style ={{textAlign: "center"}}>About page</h2>
                        {AboutText}
                    </div>
                    <div className="col-1"/>
                </div>
            </div>
            <div style={footerStyle}>
                <div className="row">
                    <div className="col-3"><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">React</a></div>
                    <div className="col-3"><a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/">Redux</a></div>
                    <div className="col-3"><a target="_blank" rel="noopener noreferrer" href="https://react-redux.js.org/introduction/quick-start">React-Redux</a></div>
                    <div className="col-3"><a target="_blank" rel="noopener noreferrer" href="https://github.com/reduxjs/redux-thunk">Thunk</a></div>
                </div>
            </div>
        </div>
    )
}