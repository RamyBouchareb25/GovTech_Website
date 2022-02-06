var container1 = document.getElementById("container1");
var fleche1 = document.getElementById("fleche1");
var shape1 = document.getElementById("shape2");

var container2 = document.getElementById("container2");
var fleche2 = document.getElementById("fleche2");
var shape2 = document.getElementById("shape3");

var container3 = document.getElementById("container3");
var fleche3 = document.getElementById("fleche3");
var shape3 = document.getElementById("shape4");

var container4 = document.getElementById("container4");
var fleche4 = document.getElementById("fleche4");
var shape4 = document.getElementById("shape5");

fleche1.onclick= function()
{
    if(container1.className != "")
    {
        container1.className = "";
        
    } else 
    {
        container4.className = ""; 
        container2.className = "";
        container3.className = "";
        container1.className = "open";   
    }
    if(shape1.className != "open")
    {
        shape2.className = ""; 
        shape4.className = "";
        shape3.className = "";
        shape1.className ="open";
    } else
    {
        shape1.className ="";        
    }
};
fleche2.onclick= function()
{
    if(container2.className != "")
    {
        container2.className = "";
        shape1.className = "";
    } else 
    {
        container1.className = ""; 
        container4.className = "";
        container3.className = "";
        shape1.className = "open2";
        container2.className = "open";   
    }
    if(shape2.className != "open")
    {
        shape1.className = ""; 
        shape4.className = "";
        shape3.className = "";
        shape2.className ="open";
    } else
    {
        shape2.className ="";        
    }
};
fleche3.onclick= function()
{
    if(container3.className != "")
    {
        container3.className = "";
        shape1.className = "";
        shape2.className ="";
    } else 
    {
        container1.className = ""; 
        container2.className = "";
        container4.className = "";
        shape1.className = "open3";
        shape2.className ="open3";
        container3.className = "open";   
    }
    if(shape3.className != "open")
    {
        shape4.className = "";
        shape1.className = "";
        shape3.className ="open";
    } else
    {
        shape3.className ="";        
    }
};
fleche4.onclick= function()
{
    if(container4.className != "")
    {
        shape4.className ="";
        container4.className = "";
        shape3.className = "";
        shape2.className ="";
        shape1.className = "";
    } else 
    {
        container1.className = ""; 
        container2.className = "";
        container3.className = "";
         shape3.className = "open4";
         shape2.className ="open4";
         shape1.className = "open4";
        container4.className = "open"; 
        shape4.className ="open";  
    }
    // if(shape4.className != "open")
    // {
    //     shape2.className = ""; 
    //     shape1.className = "";
    //     shape3.className = "";
    //     
    // } else
    // {
    //     shape4.className ="";        
    // }
};