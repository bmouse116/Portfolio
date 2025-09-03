import { useState } from "#app";
import { Tabs, type TabValue } from "~/types/types";


export const useActiveTab = () => {
    return useState<TabValue>('activeTab', () => Tabs.Hello)
}