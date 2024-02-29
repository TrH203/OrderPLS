import React, { Component } from 'react';

import "./Loading.scss";
function Loading() {
    return (
        <>
            <div className='loading-container'>
                <div className='content-container'>
                    <div className='loading-content'>
                        Loading <i class="fas fa-spinner fa-pulse"></i>
                    </div>
                </div>
            </div>
        </>)
}

export default Loading;

// const mapStateToProps = state => {
//     return {

//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Loading);
