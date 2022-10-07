import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const Headline = ({ children, color }) => {
	return (
		<Box
			paddingY={3}
			alignItems={"center"}
			justifyContent={"center"}
			display={"flex"}
			marginY={3}>
			<Box
				color={"red"}
				border={"0.5px solid red"}
				width={"5%"}
				zIndex={0}></Box>
			<Box
				fontSize={{ xs: "18px", sm: "20px", md: "25px", lg: "30px" }}
				lineHeight={{ xs: "22px", sm: "28px", md: "28px", lg: "28px" }}
				sx={{
					fontWeight: 900,
					color: color,
					letterSpacing: "1px",
					fontFamily: "Roboto",
					zindex: 100,
					backgroundColor: "none",
				}}>
				<Typography>{children}</Typography>
			</Box>
			<Box
				color={"red"}
				border={"0.5px solid red"}
				width={"5%"}
				zIndex={0}></Box>
		</Box>
	);
};

export default Headline;
