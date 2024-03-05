export interface SearchEngine {
  inputQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  startpage: {
    inputQuery: ["input[name='query']"],
    sidebarContainerQuery: ['.sidebar-results'],
    appendContainerQuery: [],
  },
}
