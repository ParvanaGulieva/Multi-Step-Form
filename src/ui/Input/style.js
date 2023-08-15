import { styled } from "styled-components";

const StyledInput = styled.div`
  .label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;

    & label {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-denim);
    }
  }

  input {
    border-radius: 0.8rem;
    border: 1px solid var(--color-border);
    outline: none;
    padding: 1.2rem 1.6rem;
    width: 100%;
    height: 4.8rem;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.5rem;
    color: var(--color-denim);

    &:focus {
      border: 1px solid var(--color-purple);
    }
  }

  ::placeholder {
    color: var(--color-grey);
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--color-denim) !important;
  }
`;

export default StyledInput;
