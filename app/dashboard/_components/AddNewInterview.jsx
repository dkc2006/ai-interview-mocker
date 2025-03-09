"use client"
import React, { useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function AddNewInterview() {
    const [openDailog, setOpenDailog] = useState(false);

    return (
        <div>
            <div
                className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
                onClick={() => setOpenDailog(true)}
            >
                <h2 className='text-lg'>+ Add New</h2>
            </div>
            <Dialog open={openDailog} onOpenChange={setOpenDailog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                    <div className='flex gap-5 justify-end mt-4'>
                        <Button variant='ghost' onClick={() => setOpenDailog(false)}>Cancel</Button>
                        <Button>Start Interview</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddNewInterview;
