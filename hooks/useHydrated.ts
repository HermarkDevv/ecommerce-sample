import { useSyncExternalStore } from "react"

export function useHydrated() {
    return useSyncExternalStore(
        () => () => { }, // subscribe (noop)
        () => true,     // client snapshot
        () => false     // server snapshot
    )
}
