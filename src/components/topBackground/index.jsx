import { TopBackgroundDiv } from "./styles";
import UsersImage from "../../assets/users.png";

function TopBackground() {
  return (
    <TopBackgroundDiv>
      <img src={UsersImage} alt="user-img" />
    </TopBackgroundDiv>
  );
}

export default TopBackground;
