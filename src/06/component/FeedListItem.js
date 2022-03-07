import React from 'react'
import {Pressable, StyleSheet, Text} from 'react-native'
import {format, formatDistanceToNow} from 'date-fns'
import {ko} from 'date-fns/locale'

function formatDate(d) {
    const date = new Date(d)
    const now = Date.now()
    const diff = (now - date.getTime()) / 1000
    
    let diffStr
    if(diff < 60) diffStr = '방금 전'
    else {
        if(diff < 60 * 60 * 24 * 3) 
            diffStr = formatDistanceToNow(date, {addSuffix: true, locale: ko})
        else diffStr = format(date, 'PPP EEE p', {locale: ko})
    }

    return diffStr
}

function truncate(text) {
    const replaced = text.replace(/\n/g, ' ')
    if(replaced.length > 100) 
        replaced.slice(0, 100).concat('...')
    return replaced 
}

function FeedListItem({log}) {
    const {title, body, date} = log

    return (
        <Pressable style={styles.block} android_ripple={{color: '#ededed'}}>
            <Text style={styles.date}>{formatDate(date)}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{truncate(body)}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    block: {
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    date: {
        fontSize: 12,
        color: '#546e7a',
        marginBottom: 8
    },
    title: {
        color: '#263238',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },
    body: {
        color: '#37474f',
        fontSize: 16,
        lineHeight: 21
    }
})

export default FeedListItem