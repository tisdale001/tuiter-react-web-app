import NavigationSidebar from "./index.js";

function displayNav() {
   $('#nav-test').append(`
   <div class="text-white ">
   ${NavigationSidebar()}
   <div/>
`);
}

$(displayNav);
