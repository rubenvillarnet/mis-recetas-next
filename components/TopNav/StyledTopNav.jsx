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
    p {
      font-size: ${({ theme }) => theme.fonts.m};
    }
    h1 {
      font-size: ${({ theme }) => theme.fonts.xl};
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
`;

export default StyledTopNav;
