import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Contact = styled.p`
  margin-left: 30px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  width: 100px;
  height: 30px;
  background-color: rgb(133, 180, 222);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(114, 79, 163);
  }
`;
