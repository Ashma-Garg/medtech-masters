import { MedMastersIconEnum, MedMastersIconsProps, IconSize } from "./interface";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import { useIconsStyle } from "./style";
import clsx from "clsx";
import { Avatar, Grid } from "@mui/material";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import SosIcon from "@mui/icons-material/Sos";

export const MedMastersIcons = ({
  title,
  size,
  iconFor,
  className,
  style,
  onClick,
}: MedMastersIconsProps) => {
  const { classes } = useIconsStyle();

  const classNames = clsx({
    [classes.defaultIconClass]: true,
    [classes.smallSize]: size && size === IconSize.small,
    [classes.mediumSize]: size && size === IconSize.medium,
    [classes.largeSize]: size && size === IconSize.large,
    [className || ""]: className && className,
  });

  switch (iconFor) {
    case MedMastersIconEnum.feed:
      return (
        <DynamicFeedIcon
          titleAccess={title}
          className={classNames}
          style={style}
        />
      );
    case MedMastersIconEnum.avatar:
      return <Avatar className={classNames} style={style} onClick={onClick} />;
    case MedMastersIconEnum.sosCall:
      return (
        <Grid onClick={onClick} className={className}>
          <SosIcon /> <RingVolumeIcon />
        </Grid>
      );
    default:
      return <RunningWithErrorsIcon />;
  }
};
