// joy add 
//javascript resource 
function drag(id)
{
    var oDiv = document.getElementById(id);
    var distX = 0;
    var distY = 0;
    oDiv.onmousedown = function(e)
    {
        var oEvent = e || event;
        distX = oEvent.clientX-oDiv.offsetLeft;
        distY = oEvent.clientY-oDiv.offsetTop;
        document.onmousemove = function(e){
            var oEvent = e || event;
            oDiv.style.left = oEvent.clientX - distX + 'px';
            oDiv.style.top = oEvent.clientY - distY + 'px';
        }
        oDiv.onmouseout = oDiv.onmouseup = function(e)
        {
            document.onmousemove = null;
            oDiv.onmouseup = null;
        }
    }


}
function getStyle(obj,attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];	
	}else
	{
		return getComputedStyle(obj,false)[attr];
	}	
}
