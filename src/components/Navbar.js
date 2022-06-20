import React, { useEffect } from 'react';
import { AiOutlineMenu} from "react-icons/ai";
import { FiShoppingCart} from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent} from "@syncfusion/ej2-react-popups";
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from "./index";
import { useStateContext} from "../contexts/ContextProvider";

const NavButton = ({ title, customfunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type="button" onClick={customfunc} style={{ color }} className=" relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{ background: dotColor }} className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
                {icon}
            </span>
        </button>
    </TooltipComponent>
)

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } = useStateContext();


    return(
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customfunc={() =>(
                setActiveMenu((prevActiveMenu) => !prevActiveMenu
            ))} color="blue" icon={ <AiOutlineMenu /> } />

            <div className="flex ">
                <NavButton
                    title="Cart"
                    customfunc={() => handleClick('cart')}
                    color="blue"
                    icon={ <FiShoppingCart /> }
                />
                <NavButton
                    title="Chat"
                    dotColor="#03c907"
                    customfunc={() => handleClick('chat')}
                    color="blue"
                    icon={ <BsChatLeft /> }
                />
                <NavButton
                    title="Notification"
                    dotColor="#03c907"
                    customfunc={() => handleClick('notification')}
                    color="blue"
                    icon={ <RiNotification3Line /> }
                />
                <TooltipComponent
                    content="Profile"
                    position="BottomCenter"
                >
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick ('useProfile')}>
                        <img
                            className="rounded-full w-8 h-8"
                            src={avatar}
                        />
                        <p>
                            <span className="text-gray-400 text-14">Hi,</span> {' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">Shafiul</span>
                        </p>
                        <MdKeyboardArrowDown text-gray-400 text-14 />
                    </div>
                </TooltipComponent>

                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {isClicked.userProfile && <UserProfile />}
            </div>
        </div>
    )
}

export default Navbar;