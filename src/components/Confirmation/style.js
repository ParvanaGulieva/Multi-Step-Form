import { styled } from "styled-components";

const StyledConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  margin-top: auto;
  margin-bottom: auto;
  h1 {
    text-align: center;
    margin-top: 1.6rem;
  }
  .bodyL {
    color: var(--color-grey);
    text-align: center;
  }
`;

export default StyledConfirmation;
