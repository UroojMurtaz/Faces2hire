import Google from "../../assets/Images/google.png";
import Facebook from "../../assets/Images/facebook.png";
import Github from "../../assets/Images/github.png";
import { useStyles } from "./styles";
import InputField from "../../Components/InputField";
import Button from "../../Components/Button";



const index = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.loginTitle}>Choose a Login Method</h1>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <div className={`${classes.loginButton} ${classes.google}`}>
            <img src={Google} alt="google" className={classes.icon} />
            Google
          </div>
          <div className={`${classes.loginButton} ${classes.facebook}`}>
            <img src={Facebook} alt="facebook" className={classes.icon} />
            FaceBook
          </div>
          <div className={`${classes.loginButton} ${classes.github}`}>
            <img src={Github} alt="github" className={classes.icon} />
            GitHub
          </div>
        </div>
        <div className={classes.center}>
        <div className={classes.line}/>
          <div className={classes.or}>OR</div>
        </div>
        <div className={classes.right}>
          <InputField placeholder={"Username or Email"} size="lg" />
          <InputField placeholder={"Password"} type={"password"} size="lg" />
          <Button label={"Login"}  className={classes.submit}/>
        </div>
      </div>
    </div>
  );
};

export default index;
