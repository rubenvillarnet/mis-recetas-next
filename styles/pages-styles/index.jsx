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
