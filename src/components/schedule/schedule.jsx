import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
//   opacity: "0.7",
backgroundColor:'#141414',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "85%",
  borderLeft: "5px solid red",
  borderRadius: "2%",

  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

const largeStyle = {
  position: "absolute",
  opacity: "0.4",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "85%",
  borderLeft: "5px solid red",
  borderRadius: "5px",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Schedule() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} lg={largeStyle}>
          <dir>
            <Grid container spacing={2}>
              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "55px",

                    
                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid style={{ height: "55px" }} item xs={5}>
                <Item style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "55px",

                    borderLeft: "5px solid rgb(219, 68, 55)",
                    textAlign: "center",
                  }}>xs=4</Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={5}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(15, 157, 86)",
                    backgroundColor: "rgb(29, 58, 46)",
                    color: "white ",
                        
                    fontWeight: "bold",
                    height: "55px",
                    textAlign: "start",
                  }}
                >
                  Breakfast ☕
                </Item>
              </Grid>
              <Grid style={{ opacity: "1" }} item xs={2}>
                <Item
                  style={{
                    color: "white ",
                    backgroundColor: "rgb(40, 41, 43)",
                    fontWeight: "normal",
                    height: "55px",

                    
                    textAlign: "center",
                  }}
                >
                  9:00am - 10:00am
                </Item>
              </Grid>
              <Grid item style={{ textAlign: "center" }} xs={10}>
                <Item
                  style={{
                    borderLeft: "5px solid rgb(15, 157, 86)",
                    backgroundColor: "rgb(40, 41, 43)",
                    color: "white ",
                        
                    fontWeight: "bold",
                    height: "55px",
                    textAlign: "start",
                  }}
                >
                  Breakfast ☕
                </Item>
              </Grid>
            


            </Grid>
          </dir>
        </Box>
      </Modal>
    </div>
  );
}
