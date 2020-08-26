import styled from 'styled-components';

const StyledRecipeList = styled.ul`
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.fadedDark};
  border-radius: 4px;
  li {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.fadedDark};
    &::not(::last-child) {
      border-bottom: none;
    }
    a {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.dark};
      font-size: 1.25rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default StyledRecipeList;
