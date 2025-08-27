import "react"
import {SignedIn, SignedOut, UserButton} from "@clerk/clerk-react"
import {Outlet, Link, Navigate} from "react-router-dom"
export function Layout() {
    return <div className="app-layout">
        <header className="app-header">
            <div className="header-content">
                <nav>
                    <SignIn>
                        <Link to="/">Genrate challenge</Link>
                        <Link to="/hoistory">History</Link>
                        <UserButton/>
                    </SignIn>
                </nav>
            </div>
        </header>
        <main className="app-main">
            <SignOut>
                <Navigate to="/sign-in" replace/>
            </SignOut>
            <SignedIn>
                <Outlet/>
            </SignedIn>
        </main>
    </div>
}
