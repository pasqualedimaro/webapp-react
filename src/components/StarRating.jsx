function StarRating({ media_voti }) {
    const maxValue = 5;
    return (
        <div className="star-rating">
            {[...Array(maxValue)].map((_, i) => (
                <i
                    key={i}
                    className={`fa-star ${i < media_voti ? 'fas' : 'far'}`}
                ></i>
            ))}
        </div>
    )
}

export default StarRating