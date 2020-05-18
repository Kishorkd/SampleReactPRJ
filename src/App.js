import React from 'react';

import './index.css';

function App (){
    let CDate= new Date();
    CDate=CDate.getHours();
    let greeting ='';
    const gStyle ={};

    if(CDate >=0 && CDate <12){
        greeting ='Good Morning';
        gStyle.color='green';
    }
    else if(CDate =12 && CDate <=19){
        greeting ='Good Afternoon';
        gStyle.color='orange';
    }
    else{
        greeting ='Good Night';
        gStyle.color='red';
    }
    return (
        <>
            <div>
                <h1>Hello Sir, <span style={gStyle}>{greeting}</span></h1>
            </div>
        </>
    
    );
}

export default App;