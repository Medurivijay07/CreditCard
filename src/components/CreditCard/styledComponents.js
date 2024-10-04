import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`
export const LeftContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #3b4b69;
`
export const LeftContainerTitle = styled.h1`
  color: #ffffff;
  text-decoration: underline 2px solid #ffd773;
  text-align: center;
  padding-bottom: 5px;
  text-underline-offset: 8px;
`
export const CardBgImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 80%;
  height: 40vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  justify-content: center;
`
export const CardNumber = styled.p`
  color: #ffffff;
  font-size: 35px;
`
export const CardName = styled.p`
  color: #ffffff;
`
export const CardHolderName = styled.p`
  color: #ffffff;
`
export const RightContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RightBox = styled.div`
  padding: 50px;
  box-shadow: 0px 0px 4px #d3d9e0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
export const InputElement = styled.input`
  padding: 10px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 10px;
`
