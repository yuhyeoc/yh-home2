import React from 'react';
import dummy from '../../db/dummy.json';

export default function MapRoof() {
    console.log(dummy)
    return (
        <ul className='listDay'>
            {dummy.days.map(day => (
                <li key={day.id}>{day.day}</li>
            ))}
        </ul>
    );
}
