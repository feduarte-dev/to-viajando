type CardProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    visited?: boolean,
  }
};

function Card({ cityInfo }: CardProps) {
  const { city, country, visited = false, imageUrl } = cityInfo;
  return (
    <div className="cards">
      <p>{city}</p>
      <p>{country}</p>
      <img src={ imageUrl } alt={ city } />
      {visited ? <p>Já Fui!</p> : <p>Não Fui.</p>}
    </div>
  );
}

export default Card;
