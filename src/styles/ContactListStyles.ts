import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 10px;
    margin: 0 5px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const FilterInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
