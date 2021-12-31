import styled from 'styled-components';

export default styled.div`
  width: 100%;

  .title {
    font-weight: bold;
  }

  .table {
    margin-top: ${(props) => props.theme.margin.large};
    width: 400px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.black};
    padding: 1px;
  }

  .tableData {
    padding: 16px;
    background-color: ${(props) => props.theme.palette.white};
  }

  .tableHead {
    background-color: ${(props) => props.theme.palette.babyBlue};
    font-weight: bold;
  }

  .tableWidth {
    width: 24px;
  }
`;
