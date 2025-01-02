export const initializeTimes = ["17:00", "18:00", "19:00", "20:00"];

export const timeReducer = (state, action) => {
    switch (action.type) {
        case 'updateTime':
            const updatedState = state.filter(time => time !== action.time);
            console.log("Updated State:", updatedState);
            return updatedState;
        case 'resetTimes':
            return initializeTimes;
        default:
            return state;
    }

}

