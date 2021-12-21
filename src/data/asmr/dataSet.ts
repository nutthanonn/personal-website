import asmrBirdIcon from "../../icon/asmr/asmr-bird.png";
import asmrBeachUmbrellaIcon from "../../icon/asmr/asmr-beach-umbrella.png";
import asmrBoatingIcon from "../../icon/asmr/asmr-boating.png";
import asmrCricketIcon from "../../icon/asmr/asmr-cricket.png";
import asmrFarmIcon from "../../icon/asmr/asmr-farm.png";
import asmrFireIcon from "../../icon/asmr/asmr-fire.png";
import asmrJungleIcon from "../../icon/asmr/asmr-jungle.png";
import asmrOwlIcon from "../../icon/asmr/asmr-owl.png";
import asmrSmallStreamFlowingIcon from "../../icon/asmr/asmr-small-stream-flowing.png";
import asmrThunderIcon from "../../icon/asmr/asmr-thunder.png";
import asmrWalkinForestIcon from "../../icon/asmr/asmr-walk-in-forest.png";
import asmeWarmAfternoonIcon from "../../icon/asmr/asmr-warm-afternoon.png";
import asmeWarmEveningIcon from "../../icon/asmr/asmr-warm-evening.png";
import asmrWaterLapingIcon from "../../icon/asmr/asmr-water-laping.png";
import asmrWaterFallIcon from "../../icon/asmr/asmr-waterfall.png";
import asmrWindForestIcon from "../../icon/asmr/asmr-wind-forest.png";
import asmrWindHallowIcon from "../../icon/asmr/asmr-wind-Hallow.png";
import asmrWindIcon from "../../icon/asmr/asmr-wind.png";

import fireSound from "../../sound/asmr/1 - Fire.mp3";
import waterFallSound from "../../sound/asmr/2 - waterfalls.mp3";
import beachSound from "../../sound/asmr/3 - beach.mp3";
import windSound from "../../sound/asmr/4 - Wind.mp3";
import smallStreamFlowing from "../../sound/asmr/5 - Small Stream Flowing.mp3";
import thunderSound from "../../sound/asmr/6 - Thunder.mp3";
import windyForest from "../../sound/asmr/7 - Windy Forest.mp3";
import owlHooying from "../../sound/asmr/8 - Owl Hooting.mp3";
import birdSound from "../../sound/asmr/9 - bird.mp3";
import walkingInForest from "../../sound/asmr/10 - Walking In Forest.mp3";
import boatingWaterSplashing from "../../sound/asmr/11 - boating water splashing.mp3";
import walkingAndSplash from "../../sound/asmr/12 - walking and splashing water.mp3";
import horseEatingGrass from "../../sound/asmr/13 - Horse Eating Grass.mp3";
import jungleAtmosphereNight from "../../sound/asmr/14 - Jungle Atmosphere Night.mp3";
import weaterLappingwind from "../../sound/asmr/15 - Water Lapping Wind.mp3";
import hallowWind from "../../sound/asmr/16 - Hallow Wind.mp3";
import warmAfternoonOutdoors from "../../sound/asmr/17 - Warm Afternoon Outdoors.mp3";
import warmEveningOutdoors from "../../sound/asmr/18 - Warm Evening Outdoors.mp3";
import cricketswithRoadandForest from "../../sound/asmr/19 - Crickets with Road and Forest.mp3";
import crowsCawinField from "../../sound/asmr/20 - Crows Caw in Field.mp3";

interface dataSetProps {
  id: number;
  audio: string;
  pic: string;
  title: string;
}

export const dataSet: dataSetProps[] = [
  {
    id: 1,
    audio: birdSound,
    pic: asmrBirdIcon,
    title: "Bird",
  },
  {
    id: 2,
    audio: beachSound,
    pic: asmrBeachUmbrellaIcon,
    title: "Beach",
  },
  {
    id: 3,
    audio: beachSound,
    pic: asmrBoatingIcon,
    title: "Beach",
  },
  {
    id: 4,
    audio: beachSound,
    pic: asmrBeachUmbrellaIcon,
    title: "Beach",
  },
  {
    id: 5,
    audio: beachSound,
    pic: asmrBeachUmbrellaIcon,
    title: "Beach",
  },
];
