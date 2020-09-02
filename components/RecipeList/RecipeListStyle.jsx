import styled from 'styled-components';
import imageIcon from '../../public/images/picture.svg';

const StyledRecipeList = styled.ul`
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.fadedDark};
  border-radius: 4px;
  a {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.dark};
    font-size: 1.25rem;
    li {
      padding: 0.75rem 1rem;
      padding-left: 2.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.fadedDark};
      cursor: pointer;
      transition: all 0.5s;
      &::not(::last-child) {
        border-bottom: none;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.fadedDark};
        a {
          color: ${({ theme }) => theme.colors.white};
        }
      }
      &.image {
        position: relative;
        &::before {
          content: '';
          width: 1rem;
          height: 1rem;
          background: url(${imageIcon});
          background-repeat: no-repeat;
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export default StyledRecipeList;
