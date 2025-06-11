'use client';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CreateWalletModalProps {
    open: boolean;
    onClose: () => void;
    onCreate: (data: { name: string; type: 'personal' | 'business' | 'savings' }) => void;
}

export default function CreateWalletModal({ open, onClose, onCreate }: CreateWalletModalProps) {
    const [walletType, setWalletType] = useState<'personal' | 'business' | 'savings'>('personal');
    const [walletName, setWalletName] = useState('');

    const handleSubmit = () => {
        if (!walletName.trim()) return;
        onCreate({ name: walletName, type: walletType });
        setWalletName('');
        setWalletType('personal');
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
            <DialogTitle>Create New Wallet</DialogTitle>
            <DialogContent>
                <TextField
                    label="Wallet Name"
                    fullWidth
                    margin="normal"
                    value={walletName}
                    onChange={(e) => setWalletName(e.target.value)}
                />
                <TextField
                    select
                    label="Wallet Type"
                    fullWidth
                    margin="normal"
                    value={walletType}
                    onChange={(e) => setWalletType(e.target.value as any)}
                >
                    <MenuItem value="personal">Personal</MenuItem>
                    <MenuItem value="business">Business</MenuItem>
                    <MenuItem value="savings">Savings</MenuItem>
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button 
                className='bg-blue-700 text-white'
                onClick={handleSubmit} 
                variant="secondary">
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    );
}
