import styled from 'styled-components';

export default styled.div`
  position: fixed;
  right: 10px;
  top: 10px;
  color: ${(props) => props.theme.palette.white};

  .dialogStatusUpdate {
    padding: 32px;
    border-radius: ${(props) => props.theme.borderRadius};
    opacity: 0.9;
    box-shadow: ${(props) => props.theme.shadow};
  }

  .greenDialog {
    background-color: ${(props) => props.theme.palette.green};
  }

  .redDialog {
    background-color: ${(props) => props.theme.palette.red};
  }

  .close {
    position: absolute;
    top: 2px;
    right: 2px;
    width: 24px;
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.palette.softGray};
    }
  }
`;
