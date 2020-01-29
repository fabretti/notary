export const state = () => ({
    // строка для поиска
  searchString: null,
    // работа в выхи
  isWeekendWork: null,
    // работа на выезд
  isFieldWork: null,
    // выбранный день
  selectedDate: null,
})

export const getters = {
    getSearchString: s => s.searchString,
    getIsWeekendWork: s => s.isWeekendWork,
    getIsFieldWork: s => s.isFieldWork,
    getSelectedDate: s => s.selectedDate,
    all: s => ({
        searchString: s.searchString,
        isWeekendWork: s.isWeekendWork,
        isFieldWork: s.isFieldWork,
        selectedDate: s.selectedDate,
    }),
}

export const mutations = {
    setSearchString: (s, p) => (s.searchString = p),
    setIsWeekendWork: (s, p) => (s.isWeekendWork = Number(p)),
    setIsFieldWork: (s, p) => (s.isFieldWork = Number(p)),
    setSelectedDate: (s, p) => (s.selectedDate = p),
    
}
