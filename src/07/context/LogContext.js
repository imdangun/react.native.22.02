import React from 'react'
import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const LogContext = createContext()

export function LogContextProvider({children}) {
    const [logs, setLogs] = useState(
        Array.from({length: 10}).map((_, index) => ({
            id: uuidv4(),
            title: `Title ${index}`,
            body: `Body ${index}`,
            date: new Date().toISOString()
        })).reverse()
    )

    const onCreate = ({title, body, date}) => {
        const log = {
            id: uuidv4(),
            title,
            body,
            date
        }
        setLogs([log, ...logs])
    }

    const onModify = modifiedLog => {
        const nextLogs = logs.map(log => log.id === modifiedLog.id ? modifiedLog : log)
        setLogs(nextLogs)
    }

    const onRemove = id => {
        const nextLogs = logs.filter(log => log.id !== id)
        setLogs(nextLogs)
    }

    return (
        <LogContext.Provider value={{logs, onCreate, onModify}}>
            {children}
        </LogContext.Provider>
    )
}

export default LogContext