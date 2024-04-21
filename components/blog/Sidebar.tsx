export default function SidebarDrawer() {
    return (
      <div className="drawer drawer-end lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button lg:hidden fixed bottom-0 right-0 m-4 z-50"
          >
            Menu
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="min-h-full menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <span className="text-gray-900 font-bold">Popular Posts</span>
            </li>
            <li>
              <a>Placeholder for Post 1</a>
            </li>
            <li>
              <a>Placeholder for Post 2</a>
            </li>
            <li>
              <a>Placeholder for Post 3</a>
            </li>
  
            <li>
              <span className="text-gray-900 font-bold mt-4">Categories</span>
            </li>
            <li>
              <a>Time Management</a>
            </li>
            <li>
              <a>Productivity Tips</a>
            </li>
            <li>
              <a>Goal Setting</a>
            </li>
  
            <li className="mt-4">
              <span className="text-gray-900 font-bold">Newsletter Signup</span>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered input-sm w-full max-w-xs"
                />
                <button className="btn btn-primary btn-sm mt-2">Subscribe</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  