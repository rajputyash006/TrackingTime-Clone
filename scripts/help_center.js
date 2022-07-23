import prnav from "./help_center_nav.js"
document.getElementById("pr_upperdiv").innerHTML=prnav();

import footer from "./hep_center_footer.js";

document.getElementById("pr_help_center_footer_main").innerHTML=footer();



let search=()=>{
    setTimeout(()=>{
        window.location.href="https://support.trackingtime.co/en/collections/2320805-getting-started";
    },2000)
   
};


window.search=search;