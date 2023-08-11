import { styled } from "styled-components";
import { useType, useTypeUpdate } from "../context/TypeContext";

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-block: 1.53rem;

  @media only screen and (min-width: 60em) {
    grid-template-columns: 1fr;
    padding: 1.5rem 1.75rem 0;
    gap: 1.15rem;
  }
`;
const Button = styled.button`
  ${(props) => props.$active && "color: var(--clr-neutral-100);"}
  font-size: var(--fs-400);
  background: none;
  border: none;
  line-height: normal;
  transition: color 150ms ease;

  @media only screen and (min-width: 60em) {
    cursor: pointer;
    display: block;
    width: fit-content;
    &:hover,
    &:focus-visible {
      color: var(--clr-neutral-100);
    }
  }
`;

export function Buttons() {
  const type = useType();
  const typeUpdate = useTypeUpdate();

  const handleTypeChange = (dataType) => {
    type !== dataType && typeUpdate(dataType);
  };

  return (
    <ButtonsWrapper>
      <Button
        onClick={() => handleTypeChange("daily")}
        className="text-primary-300"
        $active={type === "daily"}
      >
        Daily
      </Button>
      <Button
        onClick={() => handleTypeChange("weekly")}
        $active={type === "weekly"}
        className="text-primary-300"
      >
        Weekly
      </Button>
      <Button
        onClick={() => handleTypeChange("monthly")}
        className="text-primary-300"
        $active={type === "monthly"}
      >
        Monthly
      </Button>
    </ButtonsWrapper>
  );
}
