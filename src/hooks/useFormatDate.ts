import React from 'react'

const useFormatDate = (date: string) => {
    const newDate = new Date(date)
    const year = newDate.getFullYear()
    const month = String(newDate.getMonth() + 1).padStart(2, '0')
    const day = String(newDate.getDate()).padStart(2, '0')
    const hours = String(newDate.getHours()).padStart(2, '0')
    const minutes = String(newDate.getMinutes()).padStart(2, '0')
    const formattedDate = `${year}-${month}-${day}`
    const formattedTime = `${hours}:${minutes}`

    return `${formattedDate} ${formattedTime}`
}

export default useFormatDate