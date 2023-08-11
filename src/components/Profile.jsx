import { styled } from "styled-components";
import profilePicture from "../assets/images/image-jeremy.png";
import { Buttons } from "../components";

const ProfileWrapper = styled.div`
  border-radius: 0.9375rem;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.9375rem;
  padding: 2rem;
  @media only screen and (min-width: 60em) {
    display: block;
    padding: 2.31rem 2rem 5rem;
  }
`;
const ProfilePicture = styled.img`
  width: 4rem;
  height: 4rem;
  outline: 3px solid var(--clr-primary-100);
  border-radius: 100vmax;
  margin-right: 1.25rem;
  @media only screen and (min-width: 60em) {
    width: 4.875rem;
    height: 4.875rem;
    margin-bottom: 2.69rem;
  }
`;
const Title = styled.span`
  display: block;
  font-size: var(--fs-300);
  margin-bottom: 0.25rem;
  @media only screen and (min-width: 60em) {
    margin-bottom: 0.2rem;
  }
`;
const Heading = styled.h1`
  font-size: var(--fs-500);
  line-height: normal;
`;

export function Profile() {
  return (
    <ProfileWrapper className="bg-primary-500">
      <Content className="bg-primary-400">
        <ProfilePicture
          src={profilePicture}
          alt="Profile Picture of Jeremy Robinson"
        />
        <Heading className="fw-regular">
          <Title className="fw-semi-bold text-primary-200">Report for</Title>
          Jeremy Robson
        </Heading>
      </Content>
      <Buttons />
    </ProfileWrapper>
  );
}
