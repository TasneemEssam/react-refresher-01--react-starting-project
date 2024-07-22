//useRef is used to to get a reference a pointer at a real DOM node & also we can create a variables 
//useEffect allow us to register logic, a function that should be executed when certain inputs change
import React, { useRef, useEffect } from 'react';

import './Map.css';

const Map = props =>{
    const mapRef = useRef();
    const {center, zoom} = props;
    
    useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
        center: center ,
        zoom: zoom
    });

    new window.google.maps.Marker({ position: center, map: map });
    }, [center,zoom]);
    
    return  (
        <div 
            ref={mapRef} 
            className={`map ${props.className}`} 
            style={props.style}
            ></div>
    );
};

export default Map;