import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function FormInput(props) {
    return (
        <div>
            <TextField
                id="standard-multiline-flexible"
                label={props.firstlabel}
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                required
                rowsMax={4}
                onChange={props.firstfunction}
            />
            <TextField
                id="standard-multiline-static"
                label={props.secondlabel}
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                required
                rows={4}
                onChange={props.secondfunction}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
            >
                Create
            </Button>
        </div>
    )
}