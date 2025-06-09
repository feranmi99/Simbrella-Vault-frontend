import * as React from 'react';
import { Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Icon } from "@iconify/react";
import { handleLogout } from '@/utils/handleLogout';
import { AppDispatch } from '@/store';
import { IUser } from '@/types/user-types';
export default function UserMenu({
    user,
    dispatch,
} : {
    user: IUser | null;
    dispatch: AppDispatch;
}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar
                    className='border rounded-full border-slate-200 p-1'
                    sx={{ bgcolor: '#00b53f', width: 56, height: 56 }}>
                    {user ? (
                        user?.first_name?.charAt(0)?.toUpperCase().
                            concat(user?.last_name?.charAt(0)?.toUpperCase())
                    ) : (
                        <Icon
                            icon="lets-icons:user-fill"
                            className='text-white text-[40px] cursor-pointer'
                        />
                    )}
                </Avatar>
            </IconButton>
            <Menu
                PaperProps={{ sx: { minWidth: 180 } }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}>
                <MenuItem
                    onClick={() => router.push('/profile')}
                    sx={{ fontSize: '16px', paddingY: '10px', gap: '10px' }}>
                    <Icon icon="mdi:account" /> My Profile
                </MenuItem>
                <MenuItem
                    onClick={() => router.push('/my-ads')}
                    sx={{ fontSize: '16px', paddingY: '10px', gap: '10px' }}>
                    <Icon icon="material-symbols:ad-units" /> My Ads
                </MenuItem>
                <MenuItem
                    onClick={() => router.push('/favorites')}
                    sx={{ fontSize: '16px', paddingY: '10px', gap: '10px' }}>
                    <Icon icon="mdi:heart" /> Favorites
                </MenuItem>
                <MenuItem
                    onClick={() => handleLogout(router, dispatch)}
                    sx={{ fontSize: '16px', paddingY: '10px', gap: '10px' }}>
                    <Icon icon="mdi:logout" className='text-red-500' /> Logout
                </MenuItem>

            </Menu>
        </>
    );
}
