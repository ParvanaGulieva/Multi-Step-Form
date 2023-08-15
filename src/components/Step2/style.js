import { styled } from "styled-components";

const StyledStep2 = styled.div`
  margin-top: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  }

  .heading {
    margin-bottom: 1rem;
    color: var(--color-denim);
  }

  .bodyL {
    color: var(--color-grey);
  }

  .planContainer {
    display: flex;
    gap: 1.8rem;
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;
  }

  @media screen and (max-width: 980px) {
    & {
      margin-top: 0;
    }
    .planContainer {
      flex-direction: column;
    }

    .btn-container {
      margin-bottom: 0;
      margin-top: 3.2rem;
    }
  }
`;

export default StyledStep2;
