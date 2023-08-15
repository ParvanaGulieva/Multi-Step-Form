import styled from "styled-components";

const StyledStep = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  .stepNum {
    width: 3.3rem;
    height: 3.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-white);
    border-radius: 100%;
    color: var(--color-white);
  }

  .bodyS {
    margin-bottom: 0.4rem;
    color: var(--color-light-blue);
    font-weight: 500;
  }

  .bodyM {
    color: var(--color-white);
  }

  .active {
    &.stepNum {
      background-color: var(--color-sky-blue);
      border: none;
      color: var(--color-denim);
    }
  }

  @media screen and (max-width: 980px) {
    .title {
      display: none;
    }
  }
`;

export default StyledStep;
