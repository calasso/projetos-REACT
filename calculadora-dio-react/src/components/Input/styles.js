import styled from 'styled-components';


export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color:  #4C5270; /* #AAAAFF; */
  font-size: 24px;
  height: 115px;
  width: 100%;
  input {
    background-color: #303136;
    border: 0;
    color: ${props => props.colorText};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 24px;
    padding: 0 10px;
    width: 100%;
    height: 115px;
    color: #FFFFFF;
    text-align: right;
  }
`

InputContainer.defaultProps = {
    colorText: "#ffffff"
}
