import React from "react";


import Card from '../../shared/components/UIElements/Card';
import './PlaceList.css'
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
// i need to check if my items prop should be in array of places, if the length of that equal to 0 to show that there is no places found so also
// i need to return card 
    if(props.items.length === 0){
        return (
        <div className="place-list center"> 
            <Card>
                <h2>No places found. Maybe create one?</h2>
                <button>Share Place</button>

            </Card>

        </div>
        );
    }
// i want to loop or go through all my items and map this array
    return <ul className="place-list"> 
        {props.items.map(place => ( 
            <PlaceItem 
                key={place.id} 
                id={place.id} 
                image={place.imageUrl} 
                title={place.title} 
                description={place.description} 
                address={place.address} 
                creatorId={place.creator} 
                coordinates={place.location}  
            />
        ))}
        

        </ul>;

    



};
export default PlaceList;