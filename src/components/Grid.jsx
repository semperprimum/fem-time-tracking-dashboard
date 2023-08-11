import { styled } from "styled-components";
import { Card, Profile } from "../components";
import CardsList from "./CardsList";

const GridWrapper = styled.div`
  margin: 5.06rem 1.5rem;

  @media only screen and (min-width: 60em) {
    display: grid;
    grid-template-columns: 15.9375rem auto;
    gap: 1.87rem;
    width: 100%;
    margin: 0;
  }
`;

export function Grid({ data }) {
  return (
    <GridWrapper>
      <Profile className="profile" />
      <CardsList data={data} />
    </GridWrapper>
  );
}
