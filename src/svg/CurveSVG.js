import * as React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Path, Defs, LinearGradient, Stop, G} from 'react-native-svg';

const height = Dimensions.get('window').height; //full height

function SvgComponent(props) {
  return (
    <Svg
      width={'100%'}
      height={height * 0.65}
      preserveAspectRatio="none"
      viewBox="0 0 375 585"
      fill="none"
      {...props}>
      <G>
        <Path
          d="M0 0l375-1 1 509c-25.826 172.501-300 .333-376 .333V0z"
          fill="url(#prefix__paint0_linear)"
        />
        <Defs>
          <LinearGradient
            id="prefix__paint0_linear"
            x1={193.013}
            y1={3.689}
            x2={226.272}
            y2={572.749}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#0C1EBB" />
            <Stop offset={0.456} stopColor="#285FF0" />
            <Stop offset={1} stopColor="#2377F3" />
          </LinearGradient>
        </Defs>
      </G>
    </Svg>
  );
}

export default SvgComponent;
