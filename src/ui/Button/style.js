import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: 0;
  background-color: transparent;
  border-radius: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms;
  height: 4.8rem;
  font-size: 1.6rem !important;

  &:disabled {
    opacity: 0.6;
  }

  &.primary {
    background-color: var(--color-denim);
    color: var(--color-white);
    width: 12.4rem;
    margin-left: auto;

    &:hover {
      background-color: #164a8a;
    }
  }

  &.secondary {
    background-color: var(--color-purple);
    color: var(--color-white);
    width: 12.4rem;
    margin-left: auto;

    &:hover {
      background-color: #928cff;
    }
  }

  &.tertiary {
    color: var(--color-grey);

    &:hover {
      color: var(--color-denim);
    }
  }
`;

export default StyledButton;
