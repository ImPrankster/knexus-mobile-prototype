import { Slider, View } from "@tarojs/components";
import { useState } from "react";

const ImageComparison = ({
  original,
  modified,
}: {
  original: string;
  modified: string;
}) => {
  const [displayPosition, setDisplayPosition] = useState(50);

  return (
    <View className="relative overflow-hidden rounded-xl border-8 border-primary">
      <img src={original} className="border-inherit" />
      <Slider
        className="absolute top-1/3 z-10 w-full"
        min={5}
        max={95}
        step={1}
        value={displayPosition}
        onChanging={(e) => {
          setDisplayPosition(e.detail.value);
        }}
        blockColor="var(--nutui-color-primary)"
        backgroundColor="rgba(0,0,0,0)"
        activeColor="rgba(0,0,0,0)"
      />
      <img
        src={modified}
        className="absolute inset-0"
        style={{
          filter: "grayscale(100%)",
          clipPath: `polygon(0 0, ${displayPosition}% 0, ${displayPosition}% 100%, 0 100%)`,
        }}
      />
    </View>
  );
};

export default ImageComparison;
