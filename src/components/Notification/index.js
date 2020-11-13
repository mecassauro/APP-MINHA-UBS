import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
// import Svg, {Path} from 'react-native-svg';

import {
  Container,
  Information,
  Title,
  Description,
  DateArea,
  TextDateArea,
  TextDate,
  Timing,
  TextTiming,
} from './styles';

function Notification({title, description, date, color}) {
  return (
    <Container>
      <Information>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Information>

      {/* <Svg
        width="112"
        height="176"
        viewBox="0 0 112 173"
        fill="none"
        style={{position: 'absolute', right: 0}}>
        <Path
          d="M5.99907 0H103.999C108.417 0 111.999 3.58172 111.999 8V165C111.999 169.418 108.417 173 103.999 173H5.99907C-16.0006 94.9999 42.9996 74.5 5.99907 0Z"
          fill={color}
        />
      </Svg> */}
      {date && (
        <DateArea>
          <TextDateArea>Até</TextDateArea>
          <TextDate>{date}</TextDate>
          <Timing>
            <Feather name="clock" size={16} color="#FAFAFA" />
            <TextTiming>{'08:00 - 17:30'}</TextTiming>
          </Timing>
        </DateArea>
      )}
    </Container>
  );
}

export default Notification;
