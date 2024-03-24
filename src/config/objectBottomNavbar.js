import appPath from '../path/app.path'
import directionPath from '../path/direction.path'
import { objectBottomNavbar } from './objectData.config'

export const bottomNavbarData = [
   objectBottomNavbar(appPath.schedule, '/images/schedule-nav.png', true),
   objectBottomNavbar(appPath.bride, '/images/bride-nav.png'),
   objectBottomNavbar(directionPath.main, '/images/date-nav.png'),
   objectBottomNavbar(appPath.gallery, '/images/gallery-nav.png'),
   objectBottomNavbar(appPath.surprise, '/images/gift-nav.png'),
]
