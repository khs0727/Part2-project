import * as S from "./Nav.styled";
import arrow from "../../../images/arrow-right.png";
import logo from "../../../images/openmind-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const storedId = localStorage.getItem("questionId");

  const handleAnswerButtonClick = () => {
    if (storedId) {
      window.location.href = `/post/${storedId}/answer`;
    } else {
      window.location.href = "/";
    }
  };

  return (
    <S.NavWrapper>
      <Link to="/">
        <img src={logo} alt="openmind-logo" />
      </Link>
      <S.Button onClick={handleAnswerButtonClick}>
        답변하러 가기 <img src={arrow} alt="arrow-right" />
      </S.Button>
    </S.NavWrapper>
  );
};

export default Nav;
