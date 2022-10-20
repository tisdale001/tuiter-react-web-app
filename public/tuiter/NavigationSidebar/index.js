function is_active(str1, str2) {return(str1 === str2 ? 'active' : '')}

const NavigationSidebar = (active) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="#">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item list-group-item-action ${is_active(active, 'home')}" href="../HomeScreen/index.html">
        <i class="fa fa-home"></i>
        <span class="d-none d-xl-inline-block">Home</span></a>
     <a class="list-group-item list-group-item-action ${is_active(active, 'explore')}" href="../explore2/index.html">
        <i class="fa fa-hashtag"></i>
        <span class="d-none d-xl-inline-block">Explore</span></a>
     <a class="list-group-item list-group-item-action" href="#">
        <i class="fa fa-bell"></i>
        <span class="d-none d-xl-inline-block">Notifications</span></a>
     <a class="list-group-item list-group-item-action" href="#">
        <i class="fa fa-envelope"></i>
        <span class="d-none d-xl-inline-block">Messages</span></a>
     <a class="list-group-item list-group-item-action" href="../bookmarks/index.html">
        <i class="fa fa-bookmark"></i>
        <span class="d-none d-xl-inline-block">Bookmarks</span></a>
     <a class="list-group-item list-group-item-action" href="#">
        <i class="fa fa-list"></i>
        <span class="d-none d-xl-inline-block">Lists</span></a>
     <a class="list-group-item list-group-item-action" href="../profile.html">
        <i class="fa fa-user"></i>
        <span class="d-none d-xl-inline-block">Profile</span></a>
     <a class="list-group-item list-group-item-action" href="#">
        <i class="fa fa-circle"></i>
        <span class="d-none d-xl-inline-block">More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

