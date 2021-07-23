import {ADD_REMINDER, CLEAR_REMINDERS, REMOVE_REMINDER} from './Type'

export const addReminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text: text,
        date: date
    }
    console.log(action)
    return action
}

export const removeReminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id: id
    }
    console.log(action)
    return action
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    console.log(action)
    return action
}