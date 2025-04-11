function ActressList({ actress }) {
    return (
        <div className="actress-list">
            <img src={actress.image} alt={actress.name} className="actress-image" />
            <div className="list-content">
                <h2 className="actress-name">{actress.name}</h2>
                <div className="actress-info">
                    <span>Birth Year: {actress.birth_year}</span>
                    <span>Nationality: {actress.nationality}</span>
                </div>
                <h3 className="movies-title">Most Famous Movies:</h3>
                <ul className="movies-list">
                    {actress.most_famous_movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
                <div className="awards">Awards: {actress.awards}</div>
                <p className="biography">{actress.biography}</p>
            </div>
        </div>
    );
}

export default ActressList;