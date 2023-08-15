import { styled } from "styled-components";

const StyledAddOn = styled.div`
  border-radius: 0.8rem;
  border: 1px solid var(--color-border);
  padding: 1.6rem 2.4rem;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    border-color: var(--color-purple);
  }

  &.active {
    border-color: var(--color-purple);
    background-color: var(--color-very-light-grey);
  }

  .title {
    color: var(--color-denim);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: normal;
  }

  .subtitle {
    color: var(--color-grey);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
  }

  .price {
    color: var(--color-purple);
    text-align: right;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .checkboxContainer {
    display: block;
    position: relative;
    padding-left: 3rem;
    margin-bottom: 2rem;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    & input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 2rem;
    width: 2rem;
    border-radius: 0.4rem;
    border: 1px solid var(--color-border);
  }

  .checkboxContainer input:checked ~ .checkmark {
    background-color: var(--color-purple);
    border-color: transparent;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkboxContainer input:checked ~ .checkmark:after {
    display: block;
  }

  .checkboxContainer .checkmark:after {
    left: 0.7rem;
    top: 0.3rem;
    width: 0.5rem;
    height: 1rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  @media screen and (max-width: 980px) {
    & {
      padding: 1.2rem 1.6rem;
      gap: 1.2rem;
    }
  }
`;

export default StyledAddOn;
