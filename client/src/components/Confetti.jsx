import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      colors={["#440b07", "#040100", "#60605f"]}
      gravity={0.4}
      numberOfPieces={800}
    />
  );
};
