import { styled } from "styled-components";

const StyledPlan = styled.div`
  padding: 2rem 1.6rem 1.6rem;
  border: 1px solid var(--color-border);
  border-radius: 0.8rem;
  min-height: 16rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    border-color: var(--color-purple);
  }

  .planImage {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bodyL {
    color: var(--color-denim) !important;
    font-size: 1.6rem;
    font-weight: 500;
  }

  .bodyM {
    color: var(--color-grey) !important;
    font-weight: 500;
  }

  .bodyS {
    font-weight: 500;
  }

  &.active {
    background-color: var(--color-very-light-grey);
    border-color: var(--color-purple);
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    color: var(--color-denim) !important;
  }

  @media screen and (max-width: 980px) {
    & {
      padding: 1.6rem;
      min-height: 8rem;
      flex-direction: row;
      gap: 1.6rem;
      justify-content: start;
      align-items: center;
    }
  }
`;

export default StyledPlan;
