import styled from "styled-components";

export const StyledLoader = styled.div`
text-align: center;
margin: auto;
margin-bottom: 42px;
width: 16px;
aspect-ratio: 1;
border-radius: 50%;
animation: d5 1s infinite linear alternate;
@keyframes d5 {
    0% {box-shadow: 20px 0 #5c00ff, -20px 0 #0002;background: #5c00ff}
    34% {box-shadow: 20px 0 #5c00ff, -20px 0 #0002;background: #0002}
    66% {box-shadow: 20px 0 #0002, -20px 0 #5c00ff; background: #0002}
    100%{box-shadow: 20px 0 #0002, -20px 0 #5c00ff; background: 5c00ff}
}
`

