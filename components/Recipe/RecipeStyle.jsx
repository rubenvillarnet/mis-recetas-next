import styled from 'styled-components';

const StyledRecipe = styled.main`
  margin-top: 2rem;
  h1 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.fadedDark};
    margin-bottom: 1rem;
  }
  .recipe-content {
    display: flex;
    margin-bottom: 2rem;
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
      span {
        font-weight: 300;
        display: block;
        margin-left: -0.5rem;
        margin-bottom: 0.5rem;
      }
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
    margin-bottom: 2rem;
  }

  .img-container {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 82%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    img {
      max-width: 100%;
      display: block;
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
