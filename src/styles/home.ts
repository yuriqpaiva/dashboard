import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  margin: 16px;
  padding-top: ${(props) => props.theme.distance.small};
  padding-bottom: ${(props) => props.theme.distance.small};
  padding-left: ${(props) => props.theme.distance.large};
  padding-left: ${(props) => props.theme.distance.large};
  border-radius: ${(props) => props.theme.borderRadius};

  .title {
    font-weight: bold;
  }

  .table {
    margin-top: ${(props) => props.theme.distance.large};
    width: 400px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.black};
    padding: 1px;

    .tableData {
      padding: 16px;
      background-color: ${(props) => props.theme.palette.white};
    }

    .tableHead {
      background-color: ${(props) => props.theme.palette.blue};
      font-weight: bold;
      color: ${(props) => props.theme.palette.white};
    }
  }

  .mostrarMais {
    display: flex;
    justify-content: center;

    background-color: ${(props) => props.theme.palette.blue};
    color: ${(props) => props.theme.palette.white};
    border: white;
    cursor: pointer;
    border-radius: ${(props) => props.theme.borderRadius};
    width: 120px;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    margin-top: ${(props) => props.theme.distance.small};
  }

  .status {
    margin-top: ${(props) => props.theme.distance.large};

    .statusTitle {
      color: ${(props) => props.theme.palette.green};
    }

    .statusNumber {
      font-weight: bold;
    }
  }
`;
