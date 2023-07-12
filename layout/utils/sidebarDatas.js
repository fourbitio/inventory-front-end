import { AiOutlineFileAdd } from "react-icons/ai";
import { BsHexagon, BsPaperclip } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { userInfo } from "@/api/authentication/userInfo";

export const sidebarDatas = () => {
  const {role} = userInfo();
  const userSidebar = [
    {
      name: "ড্যাসবোর্ড",
      url: "/",
      subDatas: [],
      icon: <RxDashboard className="text-[20px]" />,
    },
    {
      name: "রিকুইজিশন",
      url: "/requisitions",
      subDatas: [],
      icon: <BsHexagon className="text-[20px]" />,
    },
    {
      name: "লগ আউট",
      url: "/logout",
      subDatas: [],
      icon: <MdLogout className="text-[20px]" />,
    },
  ]

    const adminSidebar = [
      {
        name: "ড্যাসবোর্ড",
        url: "/",
        subDatas: [],
        icon: <RxDashboard className="text-[20px]" />,
      },
      {
        name: "প্রোডাক্ট",
        url: "/products",
        subDatas: [],
        icon: <BsPaperclip className="text-[20px]" />,
      },
      {
        name: "স্টক",
        url: "/stocks",
        subDatas: [],
        icon: <AiOutlineFileAdd className="text-[20px]" />,
      },
      {
        name: "রিকুইজিশন",
        url: "/requisitions",
        subDatas: [],
        icon: <BsHexagon className="text-[20px]" />,
      },
      {
        name: "লগ আউট",
        url: "/logout",
        subDatas: [],
        icon: <MdLogout className="text-[20px]" />,
      },
    ]

    if(role === 'USER'){
      return userSidebar;
    }
    else{
      return adminSidebar;
    }
  

}

