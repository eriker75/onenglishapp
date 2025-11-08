import BuergerMenuIcon from "@/assets/svg/BuergerMenu.svg";
import { useSidebar } from "@/contexts/SidebarContext";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Box } from "../ui";

const HeaderMenu = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Box className="bg-white p-4 pl-10 pt-0 h-9 rounded-br-[40px] rounded-bl-[40px] flex-row items-center">
      <TouchableOpacity onPress={toggleSidebar}>
        <BuergerMenuIcon width={24} height={18} />
      </TouchableOpacity>
    </Box>
  );
};

export default HeaderMenu;
