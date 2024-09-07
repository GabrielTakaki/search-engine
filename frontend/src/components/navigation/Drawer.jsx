import PropTypes from "prop-types";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const drawerWidth = 102;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginBottom: 40,
  ...theme.mixins.toolbar
}));

const StyledDrawer = styled(MuiDrawer)(() => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    alignItems: "center"
  }
}));

function Drawer({ children, header, ...props }) {
  return (
    <StyledDrawer {...props} variant="permanent" anchor="left">
      {header && <DrawerHeader>{header}</DrawerHeader>}
      {children}
    </StyledDrawer>
  );
}

Drawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.node
};

export default Drawer;
