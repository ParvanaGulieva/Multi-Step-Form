import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: var(--color-purple);
  border-radius: 1rem;
  min-width: 27.4rem;
  position: relative;
  overflow: hidden;

  .steps {
    margin: 4rem 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .sidebarImg img {
    position: absolute;
    bottom: 0;
  }

  @media screen and (max-width: 980px) {
    & {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 24rem;
      border-radius: 0;
      z-index: -2;
    }
    .steps {
      flex-direction: row;
      gap: 1.6rem;
      z-index: 100;
      margin-top: 3%.2;
      height: 3.4rem;
    }

    .sidebarImg img {
      left: 0;
      bottom: -8rem;
      width: 100%;
    }
  }
`;

export default StyledNavbar;
