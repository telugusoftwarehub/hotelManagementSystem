import DashboardPage from "./pages/dashboard-page";
import MenuPage from "./pages/menu-page";
import RoomPage from "./pages/rooms-page";

export const routes = [{
    path: "/",
    component: DashboardPage
}, {
    path: "/menu",
    component: MenuPage
}, {
    path: "/rooms",
    component: RoomPage
}]