import Rating from "@mui/material/Rating"

export default function StarRating({value, onChange}) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Rating:</label>
            <Rating 
                value={value} 
                onChange={(_, newValue) => {onChange(newValue)}}
                size="large"
            />
        </div>
    )
}

