import Homepage from "./Pages/Homepage"
import NewsAndEvents from "./Pages/NewsAndEvents"
import NewsDetailsPage from "./Pages/NewsDetailsPage"
import VocationalCentre from "./Pages/VocationalCentre"



const routes = [
    {
        path:"/vocationalcentre",
        component:VocationalCentre,
    },
    {
        path:"/news",
        component:NewsAndEvents
    },
    {
        path:"/home",
        component:Homepage
    },
    {
        path:"/newsdetails",
        component:NewsDetailsPage
    }
]

export default routes