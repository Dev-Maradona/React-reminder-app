import React, { Component, useRef } from 'react'
import './style.css'
import {connect} from 'react-redux'
import { addReminder, removeReminder, clearReminders } from '../actions'

class App extends Component {

    state = {
        text: '',
        date: '',
        error: 'No Error',
        errStyle: 'hidden'
    }

    addReminderHandle = () => {
        if (this.state.text === '' || this.state.date === '') {
            this.setState({errStyle: 'visible'});
            this.setState({error: 'You must Fill theses Inputs'});
            setTimeout(() => {
                this.setState({errStyle: 'hidden'});
                this.setState({error: 'No Error'});
            }, 2000)
            return ;
        }
        this.props.addReminder(this.state.text, this.state.date)
        this.setState({text: '', date: ''})
    }

    clearRemindersHandle = () => {
        this.props.clearReminders()
    }

    renderReminders = () => {
        const {reminders} = this.props
            return(
                <ul className="list-group">
                    {
                        reminders.map(reminder => {
                            return (
                                <li key={reminder.id} className="list-group-item">
                                    {reminder.text}
                                    {reminder.date}
                                    <div className="remove btn btn-danger" onClick={() => {this.props.removeReminder(reminder.id)}}>X</div>
                                </li>
                            )   
                        })
                    }
                </ul>
        )
    }

    render() {
        
        return (
            <div className="App container">
                <img src="" />
                <div className="reminder-title text-center">
                    <h2>What you want to do?</h2>
                </div>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.text}
                    placeholder="Enter what you want to do .."
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                <input
                    className="form-control"
                    type="datetime-local"
                    value={this.state.date}
                    onChange={(e) => this.setState({date: e.target.value})}
                />
                <div>
                    <h5 className="text-center errStyle" style={{visibility: this.state.errStyle}}>{this.state.error}</h5>
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary"
                    onClick={this.addReminderHandle}>
                        Add Reminder
                    </button>
                    {this.renderReminders()}
                    <button className="btn btn-danger clear" onClick={this.clearRemindersHandle}>
                        Clear Reminders
                    </button>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         addReminder: () => dispatch(addReminder())
//     }
// }

export default connect(mapStateToProps, {addReminder, removeReminder, clearReminders})(App)