import {Router} from "./router.js";

const router = new Router();

router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')
router.add(404, '/pages/notfound.html')

console.log(router)

router.handle();

window.onpopstate = () => router.route();
window.route = () => router.route();