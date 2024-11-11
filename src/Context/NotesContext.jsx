import { createContext } from "react"

import data_product from "../Components/Assets/data";

const getCurrentTime = () => {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const currentDate = now.toISOString().split('T')[0];

    const formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;

    return {
        date: currentDate,
        time: formattedTime,
    };
};

const getInitials = (name) => {
    const words = name.trim().split(' ');
    let initials = '';
    initials += words[0].charAt(0).toUpperCase()
    initials += words[words.length - 1].charAt(0).toUpperCase()
    return initials;
}

export const NContext = createContext({
    data: [],
    getInitials: () => { },
    getCurrentTime: () => { }
})


const NContextProvider = (props) => {
    const data = { data_product }
    return (
        < NContext.Provider value={{ data, getInitials, getCurrentTime }}>
            {props.children}
        </NContext.Provider >
    );
}

export default NContextProvider;