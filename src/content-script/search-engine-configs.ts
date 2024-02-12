export interface SearchEngine {
  inputQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  google: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#rhs'],
    appendContainerQuery: ['#rcnt'],
  },
  bing: {
    inputQuery: ["[name='q']"],
    sidebarContainerQuery: ['#b_context'],
    appendContainerQuery: [],
  },
  duckduckgo: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['.results--sidebar.js-results-sidebar'],
    appendContainerQuery: ['#links_wrapper'],
  },
  brave: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['infobox-snippet"'],
    appendContainerQuery: [],
  },
  searx: {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#sidebar_results'],
    appendContainerQuery: [],
  },
  startpage: {
    inputQuery: ["input[name='query']"],
    sidebarContainerQuery: ['.sidebar-results'],
    appendContainerQuery: [],
  },
}
