import Styled from "styled-components";

export const Container = Styled.div`
    margin-top: 2rem;

    table { 
      width: 100%;
      border-spacing: 0rem 1rem;
    
    th {
      color: var(--text-body);
      font-weight: 400;
      text-align: center;
      line-height: 1.5rem;
    }

    td { 
      padding: 1rem 4rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.15rem;
      text-align:center;
      
      &.withdraw {
        color: var(--red);
      }
      
      &.deposit {
        color: var(--green);
      }

      &:first-child {
        color: var(--text-title);
      }

      
    }
  }
`;