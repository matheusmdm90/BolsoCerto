import Svg, { Path } from "react-native-svg";

type WaveIllustrationProps = {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
};

const Vector = ({
  width = 145,
  height = 128,
  color = "#6840F5",
  opacity = 0.75,
}: WaveIllustrationProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 135 128" fill="none">
      <Path
        opacity={opacity}
        d="M0 128C25 85 43 102 59 69C80 28 107 35 135 0V128H0Z"
        fill={color}
      />
    </Svg>
  );
};

export default Vector;
