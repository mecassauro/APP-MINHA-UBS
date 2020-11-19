import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 8h24M10.666 8V5.333a2.667 2.667 0 012.667-2.666h5.333a2.667 2.667 0 012.667 2.666V8m4 0v18.667a2.667 2.667 0 01-2.667 2.666H9.333a2.667 2.667 0 01-2.667-2.666V8h18.667zM13.334 14.667v8M18.666 14.667v8"
        stroke="#E73636"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
