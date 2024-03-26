import exe from "../assets/images/exe-file.svg";
import url from "../assets/images/url.svg";
import { Button, Box, Typography } from "@mui/material"; // Import Material-UI components
import "./style/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <main className="flex flex-col px-[100px] py-[100px] h-[550px] m-auto   ">
        <Box
          justifyContent="center"
          alignItems="center"
          className="m-auto gradient-bg "
        >
          <Typography
            className="text-gray-800 px-[100px] "
            variant="h6"
          ></Typography>{" "}
          <Button
            variant="contained"
            href="/exe"
            className=" m-auto"
            sx={{
              "&:hover": {
                // animation: "pulse 1s infinite", // Add pulse animation on hover
                backgroundColor: "#FF204E",
              },
              width: "fit-content",
              padding: "20px",
              paddingX: "50px",
              backgroundColor: "#FFFFF0",
            }}
          >
            <img src={exe} alt="" width="100px" height="100px" />
            <Typography className="text-gray-800 px-[100px] " variant="h6">
              EXE
            </Typography>{" "}
          </Button>
        </Box>
        <Box justifyContent="center" alignItems="center" className="m-auto">
          <Typography
            className="text-gray-800 px-[100px] "
            variant="h6"
          ></Typography>{" "}
          <Button
            variant="contained"
            href="/url"
            className="  m-auto "
            sx={{
              "&:hover": {
                animation: "pulse 1s infinite", // Add pulse animation on hover
                backgroundColor: "#FF204E",
              },
              width: "fit-content",
              backgroundColor: "#FFFFF0",
              padding: "20px",
              paddingX: "50px",
            }}
          >
            <img src={url} width={"100px"} height={"100px"} alt="" />
            <Typography className="text-gray-800 px-[100px] " variant="h6">
              URL
            </Typography>{" "}
          </Button>
        </Box>
      </main>
      <main></main>
    </>
  );
};

export default Dashboard;
