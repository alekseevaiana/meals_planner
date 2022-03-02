import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BackBtn({ direction }) {
  const navigate = useNavigate();

  const handleOnClick = (direction) => {
    console.log(direction);
    navigate("/");
  };
  return (
    <Box sx={{ ml: 2 }}>
      <ArrowBackRoundedIcon onClick={() => handleOnClick(direction)} />
    </Box>
  );
}
