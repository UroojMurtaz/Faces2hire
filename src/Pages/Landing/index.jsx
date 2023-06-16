import { Profile } from "./Profile";
import { Slider } from "./Slider/Slider";
import Testimonials from "./Testimonial";
import HelpCards from "./HelpCards"
import CareerSlider from "./CareerSlider"
import PeopleCards from "./People"
import TrackingSection from "./TrackingSection"

const index = () => {
  return (
    <>
      <Slider/>
      {/* <Profile /> */}
      <HelpCards />
      <CareerSlider/>
      <PeopleCards/>
      <TrackingSection />
      <Testimonials />
    </>
  );
};

export default index;
