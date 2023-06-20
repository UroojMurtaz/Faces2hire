import { Profile } from "./Profile";
import { Slider } from "./Slider/Slider";
import Testimonials from "./Testimonial";
import HelpCards from "./HelpCards"
import CareerSlider from "./CareerSlider"
import PeopleCards from "./People"
import TrackingSection from "./TrackingSection"
import BuildProfile from "./BuildProfile";
import HireEmployees from "./HireEmployees";
import ChooseUs from "./ChooseUs";
import EmployersUsing from "./EmployersUsing";

const index = () => {
  return (
    <>
      <Slider/>
      {/* <Profile /> */}
      
      <HelpCards />
      <ChooseUs/>
      <CareerSlider/>
      <EmployersUsing/>
      <PeopleCards/>
      <TrackingSection />
      <Testimonials />
      <BuildProfile/>
      <HireEmployees/>
    </>
  );
};

export default index;
