import styled from 'styled-components';

import bgImage from '../../public/images/header-bg.jpg';

const StyledTopNav = styled.header`
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.fadedDark};
  .top-nav {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      url('${bgImage}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'WalterTurncoat', sans-serif;
    padding-top: 1.5rem;
    .top-nav-content {
      p {
        font-size: ${({ theme }) => theme.fonts.m};
      }
      h1 {
        font-size: ${({ theme }) => theme.fonts.xl};
      }
      .hamburger-react {
        display: none;
      }
    }
  }
  ul {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    li {
      display: inline-block;
      margin-right: 2.5rem;
      font-size: 1.25rem;
      a {
        color: ${({ theme }) => theme.colors.dark};
        &.active {
          text-decoration: underline;
        }
      }
    }
  }
  @media screen and (max-width: 54rem) {
    .top-nav {
      padding-bottom: 0.5rem;
      .top-nav-content {
        display: flex;
        justify-content: space-between;
        p {
          font-size: ${({ theme }) => theme.fonts.s};
          z-index: 999;
          position: relative;
        }
        h1 {
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
        .hamburger-react {
          display: block;
          z-index: 999;
        }
      }
    }
    nav {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 4rem 1rem;
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.4) 100%
        ),
        url('${bgImage}');
      background-repeat: no-repeat;
      background-size: cover;
      transform: translateX(100%);
      pointer-events: none;
      z-index: 99;
      transition: all 0.5s;
      &.open {
        transform: translateX(0);
        pointer-events: auto;
      }
      ul {
        li {
          display: block;
          text-align: center;
          margin-bottom: 1rem;
          a {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  } ;
`;

export default StyledTopNav;
