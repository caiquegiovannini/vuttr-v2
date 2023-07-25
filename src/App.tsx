import { ToolsProvider } from './contexts/tools-context'
import { Home } from './pages/home'

export function App() {
    return (
        <ToolsProvider>
            <Home />
        </ToolsProvider>
    )
}
