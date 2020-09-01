import styled from 'styled-components';

const StyledRecipe = styled.main`
  margin-top: 2rem;
  margin-bottom: 4rem;
  h1 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.fadedDark};
    margin-bottom: 1rem;
  }
  .recipe-content {
    display: flex;
    margin-bottom: 1rem;
    h3 {
      font-size: ${({ theme }) => theme.fonts.m};
    }
    & > div {
      display: flex;
      flex-direction: column;
    }
    ul {
      padding-left: 1.5rem;
      border-left: 4px solid ${({ theme }) => theme.colors.fadedDark};
      flex: 1;
      li {
        margin-bottom: 0.25rem;
        position: relative;
        &:before {
          content: '-';
          position: absolute;
          left: -0.5rem;
        }
      }
    }
    .ingredients {
      flex: 1;
      margin-right: 1rem;
    }
    .steps {
      flex: 3;
    }
  }
  .footnote {
    background-color: ${({ theme }) => theme.colors.fadedDark};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 8px 11px -6px ${({ theme }) => theme.colors.fadedDark};
    margin-bottom: 1rem;
  }
  .img-container {
    &:focus {
      outline: none;
    }
    img {
      max-width: 100%;
      cursor: pointer;
      border-radius: 0.5rem;
      box-shadow: 0px 8px 11px -6px ${({ theme }) => theme.colors.fadedDark};
    }
  }
  @media screen and (max-width: 60rem) {
    .recipe-content {
      flex-direction: column;
      div {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default StyledRecipe;
