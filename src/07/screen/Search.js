import React, {useContext} from 'react'
import {StyleSheet, View} from 'react-native'
import FeedList from '../component/FeedList'
import SearchContext from '../context/SearchContext'
import LogContext from '../context/LogContext'
import EmptySearchResult from '../component/EmptySearchResult'

function Search({navigation}) {
    const {keyword} = useContext(SearchContext)
    const {logs} = useContext(LogContext)

    const filtered = keyword === '' ? [] : 
        logs.filter(log => [log.title, log.body].some(text => text.includes(keyword)))

    let component
    if(keyword === '') component = <EmptySearchResult type='EMPTY_KEYWORD'/>
    else {
        if(filtered.length === 0) component = <EmptySearchResult type='NOT_FOUND'/>
        else component = (
            <View style={styles.block}>
                <FeedList logs={filtered}/>
            </View>
        )
    }

    return component
}

const styles = StyleSheet.create({
    block: {
        flex: 1
    }
})

export default Search