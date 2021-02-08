function MemoryCard(props) {
  return (
    <div>
      <img
        src={props.imageSrc}
        alt={props.imageName}
        id={props.id}
        onClick={props.cardClicked}
      ></img>
    </div>
  );
}

export default MemoryCard;
