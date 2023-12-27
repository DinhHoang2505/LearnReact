import Search from "~/component/Layout/Search/Search"
import Following from "~/pages/Following/Following"
import HomePage from "~/pages/HomePage/HomePage"
import Profile from "~/pages/Profile/Profile"
import Upload from "~/pages/Upload/Upload"


const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: Upload },
    { path: '/search', component: Search, layout: null },
]

const priviteRoutes = [

]

export { priviteRoutes, publicRoutes }


