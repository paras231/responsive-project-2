import React from "react";
import styled from "styled-components";
import mike from "../assets/mike.png";
import group from "../assets/group.png";
import line from "../assets/line1.png";
import cardimg1 from "../assets/Rectangle 1814.png";
import darkline from "../assets/darkline.png";


const MainDiv = styled.div`
  margin-top: 20vh;
  display: flex;
`;
const TextContainer = styled.div`
  display: grid;
`;
const StyledHeading = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #212121;
`;
const LeftDiv = styled.div`
  flex: 4;
  padding-left: 8%;
`;
const RightDiv = styled.div`
  margin-top: 10%;
  margin-right: 6%;
  flex: 1.5;
  /* width:45vw; */
  height: 90vh;
`;

const Para1 = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212121;
`;

const Para1Div = styled.div`
  margin-top: 5vh;
  width: 55vw;
`;

const ImageDiv = styled.div`
  margin-top: 5vh;
  display: flex;
  gap: 30px;
`;
const Image = styled.img`
  width: 25vw;
`;

const EventHeading = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #000000;
`;

const Line = styled.img`
  margin-bottom: 7px;
`;

const CardDiv = styled.div`
  display: grid;
  margin-top: 4vh;
`;

const Card = styled.div`
  display: flex;
  gap: 30px;
`;
const CardImage = styled.img``;
const CardTextDiv = styled.div`
  display: grid;
`;

const CardParagraph = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;

  color: #272525;
`;

const DateText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */

  color: #111d5e;
`;

const Eventelist = () => {
  return (
    <>
      <MainDiv>
        <LeftDiv>
          <TextContainer>
            <StyledHeading>
              Aenean sed nibh a magna posuere tempor. Nunc faucibus
            </StyledHeading>
            <Para1Div>
              <Para1>
                Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
                dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed
                condimentum est. Mauris arcu odio, vestibulum quis dapibus sit
                amet, finibus id turpis. Aliquam semper fringilla semper. Sed
                nec velit sit amet dolor pulvinar feugiat.
              </Para1>
            </Para1Div>
            <Para1Div>
              <Para1>
                Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut
                porta facilisis elementum. Sed condimentum sed massa quis
                ullamcorper. Donec at scelerisque neque. Pellentesque sagittis,
                massa sodales sodales finibus, felis ligula tempus lorem, eu
                porttitor ex lacus vel felis. Vivamus egestas
              </Para1>
            </Para1Div>
          </TextContainer>
          <ImageDiv>
            <Image src={mike} alt="mike" />
            <Image src={group} alt="group" />
          </ImageDiv>
          <StyledHeading style={{ marginTop: "4vh" }}>
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit.
          </StyledHeading>
          <Para1Div>
            <Para1>
              Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut
              imperdiet et leo in vulputate. Sed eleifend lacus eu sapien
              sagittis imperdiet. Etiam tempor mollis augue, ut tincidunt ex
              interdum eu. Pellentesque rhoncus lectus sed posuere viverra.
              Vestibulum id turpis lectus. Donec rhoncus quis elit
            </Para1>
          </Para1Div>
        </LeftDiv>

        <RightDiv>
          <EventHeading>
            TOP EVENT LIST
            <Line src={line} />
          </EventHeading>
          <CardDiv>
            <Card>
              <CardImage src={cardimg1} alt="cardimg1" />
              <CardTextDiv>
                <CardParagraph>
                  You win as a family, You lose as a family!
                </CardParagraph>
                <DateText>05 April, 2021</DateText>
              </CardTextDiv>
            </Card>
          </CardDiv>
          <img src={darkline}/>
          <CardDiv>
            <Card>
              <CardImage src={cardimg1} alt="cardimg1" />
              <CardTextDiv>
                <CardParagraph>
                  You win as a family, You lose as a family!
                </CardParagraph>
                <DateText>05 April, 2021</DateText>
              </CardTextDiv>
            </Card>
          </CardDiv>
          <img src={darkline}/>
          <CardDiv>
            <Card>
              <CardImage src={cardimg1} alt="cardimg1" />
              <CardTextDiv>
                <CardParagraph>
                  You win as a family, You lose as a family!
                </CardParagraph>
                <DateText>05 April, 2021</DateText>
              </CardTextDiv>
            </Card>
          </CardDiv>
          <img src={darkline}/>
          <CardDiv>
            <Card>
              <CardImage src={cardimg1} alt="cardimg1" />
              <CardTextDiv>
                <CardParagraph>
                  You win as a family, You lose as a family!
                </CardParagraph>
                <DateText>05 April, 2021</DateText>
              </CardTextDiv>
            </Card>
          </CardDiv>
          <img src={darkline}/>
          <CardDiv>
            <Card>
              <CardImage src={cardimg1} alt="cardimg1" />
              <CardTextDiv>
                <CardParagraph>
                  You win as a family, You lose as a family!
                </CardParagraph>
                <DateText>05 April, 2021</DateText>
              </CardTextDiv>
            </Card>
          </CardDiv>
        </RightDiv>
      </MainDiv>
    </>
  );
};

export default Eventelist;
