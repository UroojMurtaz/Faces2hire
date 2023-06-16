import { Carousel } from "@mantine/carousel";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import { useStyles } from "./styles";

export const Slider = () => {
  const {classes}=useStyles()
  return (
    <div style={{ height: 600, display: "flex",margin:"0px",padding:"0"}}>
      <Carousel height="100%" sx={{ flex: 1 }}  >
        <Carousel.Slide className={classes.firstSlide}>
          <FirstSlide />
        </Carousel.Slide>
        <Carousel.Slide className={classes.secondSlide}>
          <SecondSlide />
        </Carousel.Slide>
        <Carousel.Slide className={classes.thirdSlide}>
          <ThirdSlide />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};
