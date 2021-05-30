import Lottie from "react-lottie";
import animationData from "../../assets/53558-mexican-fella.json";

export default function MexicanLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={400} width={400}></Lottie>;
}
