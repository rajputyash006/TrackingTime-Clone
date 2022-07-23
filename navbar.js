function navbar() {
  return `<nav class="navbar navbar-expand fixed-top bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html"><img style="height:50%;width:50%;margin-left: 100px;"  src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" style="font-weight:bold;margin-left: 250px;" aria-current="page" href="./integration.html">INTEGRATION</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style="font-weight:bold;margin-left: 50px;color: black;" href="./blog.html">BLOG</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="font-weight:bold;margin-left:50px;color: black;">
              FEATURES
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" style="font-weight:bold" href="./timetraker.html">Time Tracker</a></li>
              <li><a class="dropdown-item" style="font-weight:bold" href="./projectmanage.html">Project Management</a></li>
              <li><a class="dropdown-item" style="font-weight:bold" href="./onlinetimesheet.html">Online Timesheet</a></li>
              <li><a class="dropdown-item" style="font-weight:bold" href="https://trackingtime.co/features/time-cards">Time cards</a></li>
              <li><a class="dropdown-item" style="font-weight:bold" href="./attendancetracker.html">Attendence tracking</a></li>
              <li><a class="dropdown-item" style="font-weight:bold" href="./timereporting.html">Time reporting</a></li>
            </ul>
          </li>
          
        </ul>
       
        <button  class="btn btn-outline-success " style="margin-right: 20px;width:20%;" type="submit"><a style="text-decoration:none;color:green" href="./SIGNIN.HTML">TRY IT FREE</a></button>
          <button href="./SIGNUP.html" class="btn btn-success " style="width:15%;margin-right: 25px" type="submit"><a style="text-decoration:none;color:white" href="./SIGNUP.HTML">lOGIN</a></button>
  
      </div>
    </div>
  </nav>`;
}
export default navbar;
