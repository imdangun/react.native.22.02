import React, {useContext, useState} from 'react'
import CalendarView from '../component/CalendarView'
import LogContext from '../context/LogContext'
import {format} from 'date-fns'

function Calendar() {
   const {logs} = useContext(LogContext)
   const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'))

   const markedDates = logs.reduce((acc, current) => {
       const formattedDate = format(new Date(current.date), 'yyyy-MM-dd')
       acc[formattedDate] = {marked: true}     
       return acc
   }, {})

   return <CalendarView 
            markedDates={markedDates}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}/>
}

export default Calendar