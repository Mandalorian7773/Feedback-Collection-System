import React from 'react';
import Rating from "@mui/material/Rating"

export default function StarRating({value, onChange}) {
    return (
        <Rating value={value} onChange={(e, newValue) => {onChange(newValue)}}/>
    )
}

