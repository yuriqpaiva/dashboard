import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100vh;
  margin: 16px;
  padding-top: ${(props) => props.theme.distance.small};
  padding-bottom: ${(props) => props.theme.distance.small};
  padding-left: ${(props) => props.theme.distance.large};
  padding-left: ${(props) => props.theme.distance.large};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.palette.black};

  font-size: 17px;

  .title {
    display: flex;
    justify-content: start;
    font-weight: bold;
    background-color: ${(props) => props.theme.palette.blue};
    color: ${(props) => props.theme.palette.white};
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.shadow};
    padding: 10px;
    .titleIcon {
      width: 36px;
      height: 36px;
      margin-right: ${(props) => props.theme.distance.small};
    }
  }

  .table {
    margin-top: ${(props) => props.theme.distance.large};
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.palette.black};
    padding: 1px;

    .tableData {
      padding: 16px;
    }

    .tableText {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tableRow {
      display: flex;
      justify-content: center;
    }

    .tableRowGray {
      background-color: ${(props) => props.theme.palette.softGray};
    }

    .tableRowWhite {
      background-color: ${(props) => props.theme.palette.white};
    }

    .tableHead {
      background-color: ${(props) => props.theme.palette.blue};
      font-weight: bold;
      color: ${(props) => props.theme.palette.white};
    }

    .selectChamada {
      width: 90%;
      padding: 5px;
      margin-top: 16px;
    }

    .iconContainer {
      display: flex;
      gap: ${(props) => props.theme.distance.small};
    }

    .icon {
      display: flex;
      width: 32px;
      height: 32px;
      color: ${(props) => props.theme.palette.green};
      cursor: pointer;
    }

    .greenIcon {
      color: ${(props) => props.theme.palette.green};
    }

    .redIcon {
      color: ${(props) => props.theme.palette.red};
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
    width: 150px;
    padding: 12px;
    font-size: 16px;
    font-weight: bold;
    margin-top: ${(props) => props.theme.distance.small};
    border: 2px solid ${(props) => props.theme.palette.blue};
    :hover {
      background-color: ${(props) => props.theme.palette.white};
      color: ${(props) => props.theme.palette.black};
    }
  }

  .status {
    margin-top: ${(props) => props.theme.distance.large};
    .statusTitle {
      display: flex;
      align-items: center;
      background-color: ${(props) => props.theme.palette.green};
      color: ${(props) => props.theme.palette.white};
      padding: 10px;
      border-radius: ${(props) => props.theme.borderRadius};
      box-shadow: ${(props) => props.theme.shadow};
    }
    .statusIcon {
      display: flex;
      width: 36px;
      height: 36px;
      margin-right: ${(props) => props.theme.distance.small};
    }

    .statusNumber {
      font-weight: bold;
      font-size: 24px;
    }

    .statusItems {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: ${(props) => props.theme.distance.xl};
      margin-top: ${(props) => props.theme.distance.large};
    }

    .statusItem {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .greenItem {
      color: ${(props) => props.theme.palette.green};
    }

    .blueItem {
      color: ${(props) => props.theme.palette.blue};
    }

    .redItem {
      color: ${(props) => props.theme.palette.red};
    }
  }

  .scaleItem {
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translateX(var(--tw-translate-x))
      translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
      scaleY(var(--tw-scale-y));

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    :hover {
      --tw-scale-x: 1.25;
      --tw-scale-y: 1.25;
    }
  }
`;
