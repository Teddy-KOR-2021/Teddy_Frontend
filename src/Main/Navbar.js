import * as React from 'react';
import IconButton from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import TeddyStore from '../Store/TeddyStore';


export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {goHome, goTalktoChild, goRecordSound, goGraph} = TeddyStore;
    const menuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const menuClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={2}
        >
            <IconButton
            id="fade-button"
            aria-controls="fade-menu"
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={menuClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
            id="fade-menu"
            MenuListProps={{
                'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={menuClose}
            TransitionComponent={Fade}
            >
            <MenuItem onClick={goHome}>홈으로</MenuItem>
            <MenuItem onClick={goTalktoChild}>아이에게 말하기</MenuItem>
            <MenuItem onClick={goRecordSound}>아이 말 확인하기</MenuItem>
            <MenuItem onClick={goGraph}>아이 감정 보기</MenuItem>
            </Menu>
        </Stack>
      </div>
    );
  }