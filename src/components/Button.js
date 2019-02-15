import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform:capitalize;
  font-size:1.4rem;
  background:none;
  padding:5px 10px;
  // border:1px solid #0095da;
  border-color:${props => (props.cart ? "var(--mainYellow)":"var(--lightBlue)")};
  border-radius:5px;
  color:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
  margin:10px;
  
  &:hover, &:hover .fa{
    color: #ffffff;
    background:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
    cursor: pointer; 
    transition:all 0.5s ease-in-out;
  }
  &:focus{
    box-shadow: none;
    outline: none;
  }
  .fa{
    color: #ffffff;
    font-size: 24px;
  }
`