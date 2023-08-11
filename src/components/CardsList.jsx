import { styled } from "styled-components";
import { Card } from "./Card";

const CardsListWrapper = styled.ul`
  padding: 0;
  margin: 0;

  @media only screen and (min-width: 37.5rem) {
    display: grid;
    gap: 1.87rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function CardsList({ data }) {
  return (
    <CardsListWrapper role="list" aria-label="Stats">
      {data.map((item) => (
        <li>
          <Card key={item.title} item={item} />
        </li>
      ))}
    </CardsListWrapper>
  );
}
