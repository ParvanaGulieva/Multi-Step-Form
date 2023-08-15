import { styled } from "styled-components";

const StyledSwitch = styled.div`
  background-color: var(--color-very-light-grey);
  padding: 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  .switch {
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 2.2rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-denim);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4rem;
    width: 1.4rem;
    left: 0.55rem;
    bottom: 0.4rem;
    right: 0.6rem;
    background-color: var(--color-white);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--color-denim);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(15px);
    -ms-transform: translateX(15px);
    transform: translateX(15px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .label-text {
    color: var(--color-grey);
    font-size: 1.4rem;
    font-weight: 700;
    line-height: normal;
  }

  .active {
    color: var(--color-denim);
  }
`;

export default StyledSwitch;
