import { Audio } from "expo-av";
import { useEffect, useState } from "react";

const useSound = (file: any): Sound => {
  const [sound, setSound] = useState<Audio.Sound>();

  const play = async () => {
    sound?.replayAsync();
  };

  useEffect(() => {
    Audio.Sound.createAsync(file, { androidImplementation: "MediaPlayer" })
      .then(({ sound: loadedSound }) => {
        setSound(loadedSound);
      });

    return () => {
      sound?.unloadAsync();
    }
  }, []);

  return { sound, play };
}

interface Sound {
  sound?: Audio.Sound;
  play: () => Promise<void>;
}

export default useSound;
