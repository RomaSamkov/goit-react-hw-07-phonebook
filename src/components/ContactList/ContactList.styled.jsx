import styled from 'styled-components';

export const ListContacts = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 10px solid rgb(156, 182, 238);
  padding: 20px;
  border-radius: 50px;
`;

export const AllContacts = styled.h3`
  margin-bottom: 20px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
