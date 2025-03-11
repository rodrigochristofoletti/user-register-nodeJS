import styled from "styled-components";

export const Button = styled.button`
  border: ${(props) =>
    props.theme === "primary-button" ? "none" : "2px solid #ffffff"};
  background: ${(props) =>
    props.theme === "primary-button"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "transparent"};
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  padding: 16px 32px;
  width: fit-content;
  cursor: pointer;
  border-radius: 30px;

  &:hover {
    opacity: ${(props) =>
    props.theme === "primary-button"
      ? "0.8" : "0.8"};

    background: ${(props) =>
    props.theme === "primary-button"
      ? "linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)"
      : "#181f36"};

      color: ${(props) =>
    props.theme === "primary-button"
      ? "#ffffff"
      : "#ff6378"};

    border: ${(props) =>
    props.theme === "primary-button"
      ? "#ffffff"
      : " 1px solid #ff6378"};

  &:active {
    opacity: 0.3;

    color: #ffffff;

    border: 1px solid #ffffff;
  }
   }
`;
