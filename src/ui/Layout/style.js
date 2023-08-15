import styled from "styled-components";

const StyledLayout = styled.div`
  max-width: 94rem;
  margin: 0 auto;
  margin-top: calc((100vh - 60rem) / 2);
  height: 60rem;
  background-color: var(--color-white);
  padding: 1.6rem 10rem 1.6rem 1.6rem;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

  border-radius: 1.5rem;

  display: flex;
  flex-direction: row;
  gap: 10rem;

  .mainSection {
    display: flex;
    width: 100%;
  }

  @media screen and (max-width: 980px) {
    padding: 4rem 2.4rem;
    min-width: 30rem;
    height: auto;
    margin: 14rem 2.4rem 4rem;
  }
`;

export default StyledLayout;
