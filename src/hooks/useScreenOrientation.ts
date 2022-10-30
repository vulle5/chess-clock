import {
  addOrientationChangeListener,
  getOrientationAsync,
  Orientation,
} from "expo-screen-orientation";
import { useEffect, useState } from "react";

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState<Orientation>(
    Orientation.UNKNOWN
  );

  useEffect(() => {
    // Get the initial orientation
    getOrientationAsync().then(setOrientation);

    const subscription = addOrientationChangeListener(({ orientationInfo }) => {
      setOrientation(orientationInfo.orientation);
    });

    return () => subscription.remove();
  }, []);

  return {
    orientation,
    isPortrait:
      orientation === Orientation.PORTRAIT_UP ||
      orientation === Orientation.PORTRAIT_DOWN,
    isLandscape:
      orientation === Orientation.LANDSCAPE_LEFT ||
      orientation === Orientation.LANDSCAPE_RIGHT,
  };
};

export default useScreenOrientation;
