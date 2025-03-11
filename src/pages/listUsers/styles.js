import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Title2 = styled.h2`
  color: #ffffff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
  margin-top: 25px;
`;

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 40px 0;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

  &.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: 600;
  }
`;

export const CardUsers = styled.div`
  background-color: #252d48;
  padding: 16px;
  border-radius: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 400px;

  h3 {
    color: #ffffff;
    font-size: 24px;
    margin-bottom: 6px;
    text-transform: capitalize;
  }

  p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 200;
    margin-top: 3px;
  }
`;

export const TrashIcon = styled.img`
  cursor: pointer;
  padding-left: 30px;

  &:hover {
    opacity: 0.8;
    filter: invert(42%) sepia(88%) saturate(3465%) hue-rotate(338deg)
      brightness(102%) contrast(87%);
  }

  &:active {
    opacity: 0.5;
  }
`;

export const AvatarUser = styled.img`
  height: 80px;
`;

export const ErrorMessage = styled.p`
  color:rgb(236, 31, 17);
  font-size: 22px;
`;
