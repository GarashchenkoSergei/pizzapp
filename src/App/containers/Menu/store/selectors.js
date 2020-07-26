export const getMenuSections = state => [...new Set(state.map(item => item.section))];
