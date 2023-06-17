import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'

const SetPomodoro = () => {
    const {updateExecute} = useContext(SettingsContext);

    const [newTimer, setNewTimer] = useState({
        work: 25.0,
        short: 5.0,
        long: 15.0,
        active: 'work'
    })

    const handleChange = (input) => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
            default:
                break;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className='form-container'>
            <form noValidate onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <span>
                        <label for='work'>Work</label>&nbsp;
                        <input className='input' type='number' name='work' onChange={handleChange} value={newTimer.work} />&nbsp;
                    </span>
                    <span>
                        <label for='shortBreak'>Short</label>&nbsp;
                        <input className='input' type='number' name='shortBreak' onChange={handleChange} value={newTimer.short} />&nbsp;
                    </span>
                    <span>
                        <label for='longBreak'>Long</label>&nbsp;
                        <input className='input' type='number' name='longBreak' onChange={handleChange} value={newTimer.long} />
                    </span>
                </div>
                <button type='submit'>Set Timer</button>
                <hr></hr>
            </form>
        </div>
    )
}

export default SetPomodoro
