import {
  Button as ButtonMantine,
  createStyles,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme, { bg, primary, disabled,trans }) => ({
  rootPrimary: {
    backgroundColor: primary
      ? theme.colors.green
      : bg
      ? theme.colors.blue
      : trans
      ? theme.colors.green
      : theme.colors.red,
    "&:hover": {
      backgroundColor: primary
        ? theme.colors.greenHover
        : bg
        ? theme.colors.blueHover
        : theme.colors.redHover,
    },
  },
  disabled: {
    backgroundColor: primary
      ? theme.colors.greenHover
      : bg
      ? theme.colors.blueHover
      : theme.colors.redHover,
  },
  icon: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

const Button = ({
  leftIcon,
  label,
  bg = false,
  primary = false,
  styles,
  onClick,
  w,
  compact,
  loading,
  type,
  iconWidth = "16px",
  disabled,
  size = "sm",
  variant = "filled",

  ...props
}) => {
  const { classes, cx } = useStyles({ bg, primary, disabled });
  const theme = useMantineTheme();
  return (
    <ButtonMantine
      sx={styles}
      compact={compact}
      disabled={disabled}
      loading={loading}
      w={w}
      size={size}
      variant={variant}
      leftIcon={
        leftIcon ? (
          <img
            src={new URL(`../../assets/${leftIcon}.svg`, import.meta.url).href}
            alt="icon"
            width={iconWidth}
          />
        ) : (
          ""
        )
      }
      type={type}
      classNames={{
        root: disabled ? classes.disabled : classes.rootPrimary,
      }}
      onClick={onClick}
      {...props}
    >
      {label}
    </ButtonMantine>
  );
};
export default Button;
