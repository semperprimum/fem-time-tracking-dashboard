import { styled } from "styled-components";
import { Grid } from "./components";
import { TypeProvider } from "./context/TypeContext";
import data from "./db/data.json";

const AppWrapper = styled.main`
  max-width: 69.375rem;
  margin-inline: auto;
`;

export default function App() {
  return (
    <AppWrapper>
      <TypeProvider>
        <Grid data={data} />
      </TypeProvider>
    </AppWrapper>
  );
}
