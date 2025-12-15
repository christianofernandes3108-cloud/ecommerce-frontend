import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
      <nav>Navbar</nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
