export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    window.history.pushState({}, '', event.target.href);
  
    this.handle();
  }

  handle() {
    const { pathname, href, host, port, protocol, hostname } = window.location;
    // console.log(pathname, href, host, port, protocol, hostname)
  
    const route = this.routes[pathname] || this.routes[404]
    console.log(route)
  
    console.log('\n antes do fetch')
  
    fetch(route)
    .then(data => data.text())  
    .then(html => {
      document.getElementById('app').innerHTML = html;
    })
  
    console.log('\n depois do fetch')
  }
}

// export default new Router();