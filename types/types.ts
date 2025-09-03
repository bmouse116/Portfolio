export const Tabs = {
    Hello: "_hello",
    About: "_about-me",
    Projects: "_projects",
    Contacts: "_contacts"
}

export type TabValue = typeof Tabs[keyof typeof Tabs]