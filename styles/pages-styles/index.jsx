import styled from 'styled-components';

import bgImage from '../../public/images/header-bg.jpg';

const StyledIndex = styled.div`
  header {
    min-height: 60vh;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url('${bgImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    display: flex;
    align-items: flex-end;
    padding-bottom: 2.5rem;
    h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 4.5rem;
    }
  }
  main {
    padding-top: 2.5rem;
    font-size: ${({ theme }) => theme.fonts.m};
    nav {
      border-bottom: 2px solid ${({ theme }) => theme.colors.fadedDark};
      padding-bottom: 1rem;
      margin-bottom: 2rem;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      padding-top: 2.5rem;
      a {
        font-family: 'WalterTurncoat';
        color: ${({ theme }) => theme.colors.dark};
        font-size: ${({ theme }) => theme.fonts.l};
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .recipes-count {
      display: inline-block;
      width: 2rem;
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.colors.grey};
    }
    .search-container {
      text-align: left;
      max-width: 24rem;
      margin: auto;
      margin-bottom: 2rem;
      h3 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: ${({ theme }) => theme.fonts.l};
      }
      .search-input {
        display: flex;
        position: relative;
        margin-bottom: 1rem;
        input {
          border: none;
          border-bottom: 1px solid ${({ theme }) => theme.colors.fadedDark};
          padding-right: 2rem;
          flex: 1;
          &:focus {
            outline: none;
          }
        }
        img {
          width: 1.25rem;
          margin-right: 0.5rem;
        }
        .delete-icon {
          cursor: pointer;
          position: absolute;
          right: 0;
          bottom: 4px;
          width: 1rem;
        }
      }
      .search-results {
        padding-left: 1rem;
        p {
          font-weight: 500;
          font-size: ${({ theme }) => theme.fonts.m};
          margin-bottom: 1rem;
          padding-left: 1rem;
        }
        ul {
          li {
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
  @media screen and (max-width: 75rem) {
    header {
      min-height: 30vh;
      h1 {
        font-size: 3rem;
        text-align: center;
      }
    }
    main {
      font-size: ${({ theme }) => theme.fonts.s};
      text-align: center;
      nav {
        flex-direction: column;
        align-items: center;
        a {
          font-size: ${({ theme }) => theme.fonts.m};
          margin-bottom: 0.5rem;
        }
      }
    }
  }
`;

export default StyledIndex;
