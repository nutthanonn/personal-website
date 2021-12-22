import asmrBirdIcon from "../../icon/asmr/asmr-bird.png";
import asmrBeachUmbrellaIcon from "../../icon/asmr/asmr-beach-umbrella.png";
import asmrBoatingIcon from "../../icon/asmr/asmr-boating.png";
import asmrCricketIcon from "../../icon/asmr/asmr-cricket.png";
import asmrFireIcon from "../../icon/asmr/asmr-fire.png";
import asmrJungleIcon from "../../icon/asmr/asmr-jungle.png";
import asmrSmallStreamFlowingIcon from "../../icon/asmr/asmr-small-stream-flowing.png";
import asmrThunderIcon from "../../icon/asmr/asmr-thunder.png";
import asmrWalkinForestIcon from "../../icon/asmr/asmr-walk-in-forest.png";
import asmrWindIcon from "../../icon/asmr/asmr-wind.png";
import asmrRain from "../../icon/asmr/asmr-rain.png";

import fireSound from "../../sound/asmr/1 - Fire.mp3";
import beachSound from "../../sound/asmr/3 - beach.mp3";
import smallStreamFlowing from "../../sound/asmr/5 - Small Stream Flowing.mp3";
import thunderSound from "../../sound/asmr/6 - Thunder.mp3";
import birdSound from "../../sound/asmr/9 - bird.mp3";
import boatingWaterSplashing from "../../sound/asmr/11 - boating water splashing.mp3";
import walkingAndSplash from "../../sound/asmr/12 - walking and splashing water.mp3";
import jungleAtmosphereNight from "../../sound/asmr/14 - Jungle Atmosphere Night.mp3";
import cricketswithRoadandForest from "../../sound/asmr/19 - Crickets with Road and Forest.mp3";
import windSound from "../../sound/asmr/wind.mp3";
import RainSound from "../../sound/asmr/rain.mp3";

interface dataSetProps {
  id: number;
  audio: string;
  pic: string;
  title: string;
}

export const dataSet: dataSetProps[] = [
  {
    id: 1,
    title: "Bird",
    pic: asmrBirdIcon,
    audio: birdSound,
  },
  {
    id: 2,
    title: "Beach",
    pic: asmrBeachUmbrellaIcon,
    audio: beachSound,
  },
  {
    id: 3,
    title: "Boating",
    pic: asmrBoatingIcon,
    audio: boatingWaterSplashing,
  },
  {
    id: 4,
    title: "Cricket",
    pic: asmrCricketIcon,
    audio: cricketswithRoadandForest,
  },
  {
    id: 5,
    title: "Wind",
    pic: asmrWindIcon,
    audio: windSound,
  },
  {
    id: 6,
    title: "Fire",
    pic: asmrFireIcon,
    audio: fireSound,
  },
  {
    id: 7,
    title: "Jungle",
    pic: asmrJungleIcon,
    audio: jungleAtmosphereNight,
  },

  {
    id: 8,
    title: "Stream flowing",
    pic: asmrSmallStreamFlowingIcon,
    audio: smallStreamFlowing,
  },
  {
    id: 9,
    title: "Thunder",
    pic: asmrThunderIcon,
    audio: thunderSound,
  },
  {
    id: 10,
    title: "Walking splash",
    pic: asmrWalkinForestIcon,
    audio: walkingAndSplash,
  },
  {
    id: 11,
    title: "Rain",
    pic: asmrRain,
    audio: RainSound,
  },
];
