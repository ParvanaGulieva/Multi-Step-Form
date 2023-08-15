import { styled } from "styled-components";

const StyledStep4 = styled.div`
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

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.4rem;
    margin-top: 2.4rem;
  }

  .totalPer {
    color: var(--color-grey);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
  }

  .totalPrice {
    color: var(--color-purple);
    text-align: right;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
  }

  .selectedPlan {
    padding: 2.4rem;
    background-color: var(--color-very-light-grey);
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    & .separator {
      opacity: 0.2043;
      background: var(--color-grey);
      height: 1px;
    }
  }

  .planContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    & .plan {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      & .planTitle {
        color: var(--color-denim);
        font-size: 1.6rem;
        font-weight: 500;
        line-height: normal;
      }

      & .link {
        color: var(--color-grey);
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2rem;
        text-decoration-line: underline;
        transition: all 300ms;
        cursor: pointer;

        &:hover {
          color: var(--color-purple);
        }
      }
    }

    & .planPrice {
      color: var(--color-denim);
      text-align: right;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2rem;
    }
  }

  .selectedAdd {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .addTitle {
      color: var(--color-grey);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2rem;
    }

    & .addPrice {
      color: var(--color-denim);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2rem;
    }
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

    .btn-container {
      margin-bottom: 0;
      margin-top: 3.2rem;
    }

    .total {
      padding: 0;
    }
  }
`;

export default StyledStep4;
