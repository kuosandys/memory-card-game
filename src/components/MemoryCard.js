import styled from "styled-components";

const CardDiv = styled.div`
  margin: 10px;
  padding: 0;
  border: 3px solid ${(props) => props.theme.tertiaryColor};
  border-radius: 5px;
  height: 105px;
  width: 105px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsl(50, 5%, 44%);

  &:hover {
    height: 111px;
    width: 111px;
    margin: 7px;
    outline: none;
  }

  img {
    margin: 0;
  }

  p {
    color: ${(props) => props.theme.mainColor};
    text-transform: uppercase;
    line-height: 1;
    font-size: 20px;
    padding-top: 35px;
    height: 100%;
    width: 100%;
  }
`;

export function MemoryCard(props) {
  return (
    <CardDiv>
      <img
        src={props.imageSrc}
        alt={props.imageName}
        id={props.id}
        onClick={props.cardClicked}
      ></img>
    </CardDiv>
  );
}

export function DefaultCard(props) {
  return (
    <CardDiv>
      <p id={props.id} onClick={props.cardClicked}>
        None
      </p>
    </CardDiv>
  );
}
