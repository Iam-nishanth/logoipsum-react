import styled from "styled-components"

export const Container = styled.footer`
    width: 100%;
    height: 100%;
    min-height: 350px;
    max-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    @media (max-width: 500px) {
       min-height: 500px;
    }
`
export const Wrapper =styled.div`
    width: 100%;
    max-width: 1200px;
    height: 100%;
    display: flex;
    min-height: 300px;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
    padding: 50px 50px 0 50px;
    @media (max-width: 750px) {
        padding: 25px 25px 0 25px;
    }
    
   
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 750px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
`
export const LogoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 750px){
        align-items: center;
    }
`
export const LinkSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    align-items: end;
    @media (max-width: 750px){
        align-items: center;
    }
    @media (max-width: 500px) {
       min-height: 150px;
    }
`

export const Logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    @media (max-width: 750px){
     justify-content: center;
    }
`
export const Address = styled.div`
@media (max-width: 750px){
        align-items: center;
        text-align: center;
    }
`
export const Links = styled.div`
    display: flex;
    gap: 40px;
    height: 100%;
    max-height: 47px;
    @media (max-width: 500px){
        align-items: center;
        flex-direction: column;
        gap: 20px;
        max-height: none;
        justify-content: center;
        text-align: center;

    }
    
`
export const Icons = styled.div`
    display: flex;
    gap: 20px;
    svg{
        font-size: 25px;
    }
    

`
export const Anchor = styled.a`
        font-weight: 700;
        color: #534a45;
        font-size: 18px;
        width: 100%;
        max-width: 364px;
        cursor: pointer;
        &:hover{
            color: #312d2b; 
        }
`
export const Para = styled.p`
font-weight: 700;
        color: #534a45;
        font-size: 18px;
        width: 100%;
        max-width: 364px;
        @media (max-width: 500px){
            max-width: 300px;
    }
`
export const Image = styled.img.attrs({src:'https://websitedemos.net/agency-ai/wp-content/uploads/sites/836/2021/05/logo-black.svg'})`
    width: 100%;
    height: 100%;
    max-width: 200px;
    aspect-ratio: auto 200 / 48;
    max-height: 48px;
`
export const Copyright = styled.div`
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 100%;
    min-height: 70px;
    @media (max-width: 750px){
        text-align: center;
    }
`