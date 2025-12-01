import styled from "styled-components"

const Button = styled.button`
    background-color: darkblue;
    color: #fff;
    padding: 1rem 2rem;
    border-radius: 1rem;
`;
const StyleBtn = () => {
  return (
    <div>
        <Button color="blue">클릭</Button>
        <Button color="green">클릭</Button>
        <Button>기본</Button>
    </div>
  )
}

export default StyleBtn