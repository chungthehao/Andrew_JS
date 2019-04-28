let filters = {
    searchText: '',
    sortBy: 'byEdited'
}

const getFilters = () => filters

const setFilters = (updateInfo) => {
    if (typeof updateInfo.searchText === 'string')
        filters.searchText = updateInfo.searchText
    
    if (typeof updateInfo.sortBy === 'string')
        filters.sortBy = updateInfo.sortBy
}

export { getFilters, setFilters }