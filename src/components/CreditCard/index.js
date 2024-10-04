import {useState} from 'react'

import {
  MainContainer,
  LeftContainer,
  LeftContainerTitle,
  CardBgImage,
  CardNumber,
  CardHolderName,
  RightContainer,
  RightBox,
  InputElement,
  CardName,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNumber, setNumber] = useState('')

  const onChangeName = event => {
    const updatedName = event.target.value

    setName(updatedName)
  }

  const onChangeNumber = event => setNumber(event.target.value)

  return (
    <MainContainer>
      <LeftContainer>
        <LeftContainerTitle>CREDIT CARD</LeftContainerTitle>
        <CardBgImage data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardName>{name.toUpperCase()}</CardName>
        </CardBgImage>
      </LeftContainer>
      <RightContainer>
        <RightBox>
          <h1>Payment Method</h1>
          <InputElement
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeNumber}
          />
          <InputElement
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </RightBox>
      </RightContainer>
    </MainContainer>
  )
}

export default CreditCard
