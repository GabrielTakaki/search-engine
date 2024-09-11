import PropTypes from "prop-types";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../consts/colors";

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
    alignItems: "center",
    borderRight: `1px solid ${COLORS.primary[100]}`
  }
}));

function Drawer({ children, header, isOpen }) {
  return (
    <StyledDrawer open={isOpen} variant="permanent" anchor="left">
      {header && <DrawerHeader>{header}</DrawerHeader>}
      {children}
    </StyledDrawer>
  );
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  header: PropTypes.node
};

export default Drawer;
