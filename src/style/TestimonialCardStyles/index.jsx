import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 500px;
    min-height: 250px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`
export const Stars = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const Message = styled.p``
export const Details = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    gap: 15px;
`
export const DetailsImg = styled.img`
    border-radius: 50%;
    width: 65px;
    height: 65px;
    object-fit: cover;

`