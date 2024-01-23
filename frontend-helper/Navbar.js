export default function Navbar(){
    const username = "pomodoro-tracker-dev"

    return(
        <nav>
            <div className="navbar bg-orange-300 text-zinc-800">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl" href="#">Pomodoro Tracker</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>About Us</a></li>
                        <li><a>Stats</a></li>
                        <li><a>Goals</a></li>
                        <li><a>Welcome @{username}</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}