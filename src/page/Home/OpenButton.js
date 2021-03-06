import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
  position: fixed;
  right: 0.1rem;
  top: 0.1rem;
  width: 0.6rem;
  height: 0.6rem;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.12rem;
  z-index: 996;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #333;
  transition: transform 0.5s;
  svg {
    width: 100%;
    height: 100%;
  }
  /* .title {
    text-align: center;
    color: #555;
    font-size: 0.1rem;
  } */
  &:hover {
    transform: scale(1.1);
  }
`;
export default function OpenButton({ openWidgetListModal }) {
  return (
    <StyledButton onClick={openWidgetListModal}>
      <svg
        t="1611902198325"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2002"
        width="50"
        height="50"
      >
        <path
          d="M401.03 171.204H85.513c-11.832 0-21.513 9.681-21.513 21.513v315.518c0 11.832 9.681 21.512 21.513 21.512H401.03c11.832 0 21.513-9.68 21.513-21.512V192.717c0-11.832-9.681-21.513-21.513-21.513zM944.644 277.753L746.246 79.356C736.009 69.119 722.514 64 709.019 64s-26.989 5.119-37.227 15.356L473.395 277.753c-20.474 20.475-20.474 53.98 0 74.454l198.397 198.399c10.238 10.236 23.732 15.355 37.227 15.355s26.989-5.119 37.227-15.355l198.397-198.399c20.476-20.474 20.476-53.979 0.001-74.454z m-25.342 49.111L720.904 525.262c-4.227 4.227-9.261 4.858-11.885 4.858-2.624 0-7.656-0.631-11.884-4.857L498.738 326.864c-6.442-6.442-6.442-17.327 0-23.768l198.398-198.398c4.227-4.227 9.261-4.858 11.884-4.858 2.624 0 7.656 0.631 11.885 4.858l198.398 198.398c6.44 6.441 6.441 17.326-0.001 23.768zM401.03 601.457H85.513c-11.832 0-21.513 9.681-21.513 21.512v315.518C64 950.319 73.681 960 85.513 960H401.03c11.832 0 21.513-9.681 21.513-21.513V622.969c0-11.831-9.681-21.512-21.513-21.512zM831.283 601.457H515.765c-11.832 0-21.513 9.681-21.513 21.512v315.518c0 11.832 9.681 21.513 21.513 21.513h315.518c11.832 0 21.513-9.681 21.513-21.513V622.969c0-11.831-9.681-21.512-21.513-21.512z"
          p-id="2003"
          fill="#5072f0"
        ></path>
      </svg>
      {/* <h2 className="title">添加</h2> */}
    </StyledButton>
  );
}
