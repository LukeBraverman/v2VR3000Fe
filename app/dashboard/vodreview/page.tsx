"use client"
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import React from "react";
import {RichTextEditor} from "@/app/components/RichTextEditor";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function Home() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="flex h-[100%]">
            {/* Video Holder - 80% */}
            <div id="videoholder" className="flex-[4] bg-gray-200 flex justify-center items-center h-[100%]">
                <video className="w-[70%] h-[70%] object-cover" controls>
                    <source src="/tokido.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>


            {/* Notes Sidebar - 20% */}
            <div id="notessidebar" className="flex-[1] bg-gray-800 text-white p-4 flex flex-col border-4 border-indigo-500 gap-2">
                <div id="header" className="w-full h-20 border-2 border-solid flex justify-center items-center gap-2" >
                    <h1>Notes</h1>
                    <Button onClick={handleClickOpen} sx={{ fontSize: "24px" }}>+</Button>
                </div>
                <div id="notes" className="w-full h-full border-4 border-indigo-500 ">
                    <div>
                    </div>
                </div>


            </div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                    Add Note
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon/>
                </IconButton>
                <DialogContent dividers>
                    <div>
                        <RichTextEditor />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>

    );
}
