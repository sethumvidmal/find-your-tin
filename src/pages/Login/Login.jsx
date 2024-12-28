import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TinService from "../../services/TinService";

const Login = () => {
  const [keyword, setKeyword] = useState("");
  const [response, setResponse] = useState();

  const handleSearch = async () => {
    const tinResponse = await TinService.getTin({ nic: keyword });

    console.log("Response", tinResponse);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            backdropFilter: "blur(10px)", // Glass-like blur effect
            border: "1px solid rgba(255, 255, 255, 0.3)", // Optional border for realism
            borderRadius: 2, // Rounded corners
            padding: 2, // Add padding for inner content
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "rgb(237, 237, 237)" }}
          >
            Enter Your NIC to find your TIN number
          </Typography>
          <TextField
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="NIC"
            variant="outlined"
            fullWidth
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background for the field
              borderRadius: 1, // Rounded edges for the text field
              input: {
                color: "rgba(83, 83, 83, 0.9)", // Soft white input text color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)", // Transparent border
                },
                "&:hover fieldset": {
                  borderColor: "rgb(154, 154, 154)", // Slightly brighter on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.8)", // More pronounced on focus
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip title="Search">
                    <IconButton
                      sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
                        color: "rgba(0, 0, 0, 0.7)", // Soft black for contrast
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.5)", // Slightly brighter on hover
                        },
                      }}
                      onClick={handleSearch}
                    >
                      <Search />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
