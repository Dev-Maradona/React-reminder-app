import { ADD_REMINDER, CLEAR_REMINDERS, REMOVE_REMINDER } from "../actions/Type"

const reminders = (state=[], action) => {
    let reminders = null;

    if (action.type === ADD_REMINDER)
    {
        reminders = [...state, {text: action.text, date: action.date, id: Math.random()}]
        console.log(reminders)
        return reminders
    }
    else if (action.type === REMOVE_REMINDER)
    {
        reminders = state.filter(reminder => reminder.id !== action.id)
        return reminders
    }
    else if (action.type === CLEAR_REMINDERS)
    {
        reminders = []
        return reminders
    }
    else 
    {
        return state
    }
}

export default reminders