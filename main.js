(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e,n=document.querySelector(".game__container"),t=Array.from(document.querySelectorAll(".game__cell")),o=document.querySelector("#game-score"),r=document.querySelector(".game__restart-button"),c=10,a=["orange","red","purple","green","blue"],l=4,u=0,i=0,s=0,f=!1,d=[[[1,11,21,2],[c,11,12,22],[1,11,21,20],[c,20,21,22]],[[0,c,11,21],[11,12,20,21],[0,c,11,21],[11,12,20,21]],[[1,c,11,12],[1,11,12,21],[c,11,12,21],[1,c,11,21]],[[0,1,c,11],[0,1,c,11],[0,1,c,11],[0,1,c,11]],[[1,11,21,31],[c,11,12,13],[1,11,21,31],[c,11,12,13]]],m=Math.floor(Math.random()*d.length),_=d[m][u];function g(e,n){t[l+e].style.backgroundColor=n}function h(){_.forEach((function(e){return g(e,"")}))}function k(){_.forEach((function(e){return g(e,a[m])}))}function y(){h(),l+=c,k(),_.some((function(e){return t[l+e+c].classList.contains("game__cell_taken")}))&&(_.forEach((function(e){return t[l+e].classList.add("game__cell_taken")})),m=i,i=Math.floor(Math.random()*d.length),_=d[m][u],l=4,k(),E(),function(){for(var e=0;e<200;e+=c){var r=[e,e+1,e+2,e+3,e+4,e+5,e+6,e+7,e+8,e+9];if(r.every((function(e){return t[e].classList.contains("game__cell_taken")}))){s+=10,o.innerHTML=s,r.forEach((function(e){t[e].classList.remove("game__cell_taken"),t[e].style.backgroundColor=""}));var a=t.splice(e,c);(t=a.concat(t)).forEach((function(e){return n.appendChild(e)}))}}}(),_.some((function(e){return t[l+e].classList.contains("game__cell_taken")}))&&(o.innerHTML="end",clearInterval(e),f=!0))}function v(e){((e=e||l)+1)%c<4?_.some((function(e){return(l+e+1)%c==0}))&&(l+=1,v(e)):e%c>5&&_.some((function(e){return(l+e)%c==0}))&&(l-=1,v(e))}r.addEventListener("click",(function(){e&&(clearInterval(e),e=null),function(){for(var e=0;e<200;e++)t[e].classList.remove("game__cell_taken"),t[e].style.backgroundColor=""}(),m=Math.floor(Math.random()*d.length),i=Math.floor(Math.random()*d.length),l=4,_=d[m][u=0],s=0,o.innerHTML=s,f=!1,k(),e=setInterval(y,1e3),E()})),document.addEventListener("keyup",(function(e){f||(37===e.keyCode?(h(),_.some((function(e){return(l+e)%c==0}))||(l-=1),_.some((function(e){return t[l+e].classList.contains("game__cell_taken")}))&&(l+=1),k()):38===e.keyCode?(h(),++u===_.length&&(u=0),_=d[m][u],v(),k()):39===e.keyCode?(h(),_.some((function(e){return(l+e)%c==9}))||(l+=1),_.some((function(e){return t[l+e].classList.contains("game__cell_taken")}))&&(l-=1),k()):40===e.keyCode&&y())}));var L=document.querySelectorAll(".game__next-wrapper div"),M=0,C=[[1,5,9,2],[0,4,5,9],[1,4,5,6],[0,1,4,5],[1,5,9,13]];function E(){L.forEach((function(e){e.style.backgroundColor=""})),C[i].forEach((function(e){L[M+e].style.backgroundColor=a[i]}))}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRUFBLFNBQVNDLGlCQUFpQixvQkFBb0IsV0FDNUMsSUFXSUMsRUFYRUMsRUFBT0gsU0FBU0ksY0FBYyxvQkFDaENDLEVBQVVDLE1BQU1DLEtBQUtQLFNBQVNRLGlCQUFpQixnQkFDN0NDLEVBQWVULFNBQVNJLGNBQWMsZUFDdENNLEVBQVdWLFNBQVNJLGNBQWMseUJBQ2xDTyxFQUFRLEdBQ1JDLEVBQVMsQ0FBQyxTQUFVLE1BQU8sU0FBVSxRQUFTLFFBR2hEQyxFQUFrQixFQUNsQkMsRUFBa0IsRUFDbEJDLEVBQWEsRUFFYkMsRUFBUSxFQUNSQyxHQUFRLEVBZ0NOQyxFQUFTLENBOUJBLENBQ2IsQ0FBQyxFQUFHUCxHQUFTQSxHQUFXLEdBQ3hCLENBQUNBLEVBQU9BLEdBQVNBLEdBQVNBLElBQzFCLENBQUMsRUFBR0EsR0FBU0EsR0FBV0EsSUFDeEIsQ0FBQ0EsRUFBT0EsR0FBU0EsR0FBV0EsS0FFZixDQUNiLENBQUMsRUFBR0EsRUFBT0EsR0FBU0EsSUFDcEIsQ0FBQ0EsR0FBU0EsR0FBU0EsR0FBU0EsSUFDNUIsQ0FBQyxFQUFHQSxFQUFPQSxHQUFTQSxJQUNwQixDQUFDQSxHQUFTQSxHQUFTQSxHQUFTQSxLQUVmLENBQ2IsQ0FBQyxFQUFHQSxFQUFPQSxHQUFTQSxJQUNwQixDQUFDLEVBQUdBLEdBQVNBLEdBQVNBLElBQ3RCLENBQUNBLEVBQU9BLEdBQVNBLEdBQVNBLElBQzFCLENBQUMsRUFBR0EsRUFBT0EsR0FBU0EsS0FFUCxDQUNiLENBQUMsRUFBRyxFQUFHQSxFQUFPQSxJQUNkLENBQUMsRUFBRyxFQUFHQSxFQUFPQSxJQUNkLENBQUMsRUFBRyxFQUFHQSxFQUFPQSxJQUNkLENBQUMsRUFBRyxFQUFHQSxFQUFPQSxLQUVELENBQ2IsQ0FBQyxFQUFHQSxHQUFTQSxHQUFXQSxJQUN4QixDQUFDQSxFQUFPQSxHQUFTQSxHQUFTQSxJQUMxQixDQUFDLEVBQUdBLEdBQVNBLEdBQVdBLElBQ3hCLENBQUNBLEVBQU9BLEdBQVNBLEdBQVNBLE1BS3hCUSxFQUFTQyxLQUFLQyxNQUFNRCxLQUFLRCxTQUFXRCxFQUFPSSxRQUMzQ0MsRUFBVUwsRUFBT0MsR0FBUUwsR0FxQzdCLFNBQVNVLEVBQVNDLEVBQU9DLEdBQ3ZCckIsRUFBUVEsRUFBa0JZLEdBQU9FLE1BQU1DLGdCQUFrQkYsQ0FDM0QsQ0FFQSxTQUFTRyxJQUNQTixFQUFRTyxTQUFRLFNBQUFMLEdBQUssT0FBSUQsRUFBU0MsRUFBTyxHQUFHLEdBQzlDLENBRUEsU0FBU00sSUFDUFIsRUFBUU8sU0FBUSxTQUFBTCxHQUFLLE9BQUlELEVBQVNDLEVBQU9iLEVBQU9PLEdBQVEsR0FDMUQsQ0FtQkEsU0FBU2EsSUFDUEgsSUFDQWhCLEdBQW1CRixFQUNuQm9CLElBeUJJUixFQUFRVSxNQUFLLFNBQUFSLEdBQUssT0FBSXBCLEVBQVFRLEVBQWtCWSxFQUFRZCxHQUFPdUIsVUFBVUMsU0FBUyxtQkFBbUIsTUFDdkdaLEVBQVFPLFNBQVEsU0FBQUwsR0FBSyxPQUFJcEIsRUFBUVEsRUFBa0JZLEdBQU9TLFVBQVVFLElBQUksbUJBQW1CLElBRTNGakIsRUFBU0osRUFDVEEsRUFBYUssS0FBS0MsTUFBTUQsS0FBS0QsU0FBV0QsRUFBT0ksUUFDL0NDLEVBQVVMLEVBQU9DLEdBQVFMLEdBQ3pCRCxFQUFrQixFQUNsQmtCLElBQ0FNLElBc0RKLFdBQ0UsSUFBSyxJQUFJQyxFQUFJLEVBQUdBLEVBQUksSUFBS0EsR0FBSzNCLEVBQU8sQ0FDbkMsSUFBTTRCLEVBQU0sQ0FBQ0QsRUFBR0EsRUFBRSxFQUFHQSxFQUFFLEVBQUdBLEVBQUUsRUFBR0EsRUFBRSxFQUFHQSxFQUFFLEVBQUdBLEVBQUUsRUFBR0EsRUFBRSxFQUFHQSxFQUFFLEVBQUdBLEVBQUUsR0FFMUQsR0FBSUMsRUFBSUMsT0FBTSxTQUFBZixHQUFLLE9BQUlwQixFQUFRb0IsR0FBT1MsVUFBVUMsU0FBUyxtQkFBbUIsSUFBRyxDQUM3RW5CLEdBQVMsR0FDVFAsRUFBYWdDLFVBQVl6QixFQUN6QnVCLEVBQUlULFNBQVEsU0FBQUwsR0FDVnBCLEVBQVFvQixHQUFPUyxVQUFVUSxPQUFPLG9CQUNoQ3JDLEVBQVFvQixHQUFPRSxNQUFNQyxnQkFBa0IsRUFDekMsSUFDQSxJQUFNZSxFQUFpQnRDLEVBQVF1QyxPQUFPTixFQUFHM0IsSUFDekNOLEVBQVVzQyxFQUFlRSxPQUFPeEMsSUFDeEJ5QixTQUFRLFNBQUFnQixHQUFJLE9BQUkzQyxFQUFLNEMsWUFBWUQsRUFBSyxHQUNoRCxDQUNGLENBQ0YsQ0FyRUlFLEdBd0VFekIsRUFBUVUsTUFBSyxTQUFBUixHQUFLLE9BQUlwQixFQUFRUSxFQUFrQlksR0FBT1MsVUFBVUMsU0FBUyxtQkFBbUIsTUFDL0YxQixFQUFhZ0MsVUFBWSxNQUN6QlEsY0FBYy9DLEdBQ2RlLEdBQVEsR0EzR1osQ0FxQ0EsU0FBU2lDLEVBQXFCQyxLQUM1QkEsRUFBSUEsR0FBS3RDLEdBQ0YsR0FBS0YsRUFBUSxFQUNkWSxFQUFRVSxNQUFLLFNBQUFSLEdBQUssT0FBS1osRUFBa0JZLEVBQVEsR0FBS2QsR0FBVSxDQUFDLE1BQ25FRSxHQUFtQixFQUNuQnFDLEVBQXFCQyxJQUVkQSxFQUFJeEMsRUFBUSxHQUNqQlksRUFBUVUsTUFBSyxTQUFBUixHQUFLLE9BQUtaLEVBQWtCWSxHQUFTZCxHQUFVLENBQUMsTUFDL0RFLEdBQW1CLEVBQ25CcUMsRUFBcUJDLEdBRzNCLENBdkhBekMsRUFBU1QsaUJBQWlCLFNBSTFCLFdBQ01DLElBQ0YrQyxjQUFjL0MsR0FDZEEsRUFBVSxNQVVkLFdBQ0UsSUFBSyxJQUFJb0MsRUFBSSxFQUFHQSxFQUFJLElBQUtBLElBQ3ZCakMsRUFBUWlDLEdBQUdKLFVBQVVRLE9BQU8sb0JBQzVCckMsRUFBUWlDLEdBQUdYLE1BQU1DLGdCQUFrQixFQUV2QyxDQVpFd0IsR0FlQWpDLEVBQVNDLEtBQUtDLE1BQU1ELEtBQUtELFNBQVdELEVBQU9JLFFBQzNDUCxFQUFhSyxLQUFLQyxNQUFNRCxLQUFLRCxTQUFXRCxFQUFPSSxRQUMvQ1QsRUFBa0IsRUFFbEJVLEVBQVVMLEVBQU9DLEdBRGpCTCxFQUFrQixHQUVsQkUsRUFBUSxFQUNSUCxFQUFhZ0MsVUFBWXpCLEVBQ3pCQyxHQUFRLEVBcEJSYyxJQUNBN0IsRUFBVW1ELFlBQVlyQixFQUFVLEtBQ2hDSyxHQUNGLElBZEFyQyxTQUFTQyxpQkFBaUIsU0E4QzFCLFNBQWlCcUQsR0FDWHJDLElBSWMsS0FBZHFDLEVBQUVDLFNBb0JOMUIsSUFDcUJOLEVBQVFVLE1BQUssU0FBQVIsR0FBSyxPQUFLWixFQUFrQlksR0FBU2QsR0FBVSxDQUFDLE1BQy9ERSxHQUFtQixHQUNsQ1UsRUFBUVUsTUFBSyxTQUFBUixHQUFLLE9BQUlwQixFQUFRUSxFQUFrQlksR0FBT1MsVUFBVUMsU0FBUyxtQkFBbUIsTUFDL0Z0QixHQUFtQixHQUVyQmtCLEtBeEJ5QixLQUFkdUIsRUFBRUMsU0FvRWIxQixNQUNBZixJQUN3QlMsRUFBUUQsU0FDOUJSLEVBQWtCLEdBRXBCUyxFQUFVTCxFQUFPQyxHQUFRTCxHQUN6Qm9DLElBQ0FuQixLQXpFeUIsS0FBZHVCLEVBQUVDLFNBMEJiMUIsSUFDc0JOLEVBQVFVLE1BQUssU0FBQVIsR0FBSyxPQUFLWixFQUFrQlksR0FBU2QsR0FBVUEsQ0FBUyxNQUN2RUUsR0FBbUIsR0FDbkNVLEVBQVFVLE1BQUssU0FBQVIsR0FBSyxPQUFJcEIsRUFBUVEsRUFBa0JZLEdBQU9TLFVBQVVDLFNBQVMsbUJBQW1CLE1BQy9GdEIsR0FBbUIsR0FFckJrQixLQTlCeUIsS0FBZHVCLEVBQUVDLFNBQ1h2QixJQUVKLElBd0VBLElBQU13QixFQUFtQnhELFNBQVNRLGlCQUFpQiwyQkFFN0NpRCxFQUFpQixFQUVqQkMsRUFBYSxDQUNqQixDQUFDLEVBQUdDLEVBQWtCQSxFQUFvQixHQUMxQyxDQUFDLEVBTG9CLEVBS0RBLEVBQWtCQSxHQUN0QyxDQUFDLEVBTm9CLEVBTURBLEVBQWtCQSxHQUN0QyxDQUFDLEVBQUcsRUFQaUIsRUFPRUEsR0FDdkIsQ0FBQyxFQUFHQSxFQUFrQkEsRUFBb0JBLEtBRzVDLFNBQVN0QixJQUNQbUIsRUFBaUIxQixTQUFRLFNBQUE4QixHQUN2QkEsRUFBT2pDLE1BQU1DLGdCQUFrQixFQUNqQyxJQUNBOEIsRUFBVzNDLEdBQVllLFNBQVEsU0FBQUwsR0FDN0IrQixFQUFpQkMsRUFBaUJoQyxHQUFPRSxNQUFNQyxnQkFBa0JoQixFQUFPRyxFQUMxRSxHQUNGLENBMkJGLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93Yi1sMi10ZXRyaXMvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXguY3NzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19jb250YWluZXInKTtcbiAgbGV0IHNxdWFyZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lX19jZWxsJykpO1xuICBjb25zdCBzY29yZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zY29yZScpO1xuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19yZXN0YXJ0LWJ1dHRvbicpO1xuICBjb25zdCB3aWR0aCA9IDEwO1xuICBjb25zdCBjb2xvcnMgPSBbJ29yYW5nZScsICdyZWQnLCAncHVycGxlJywgJ2dyZWVuJywgJ2JsdWUnXTtcblxuICAvLyBHYW1lIHZhcnNcbiAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IDQ7XG4gIGxldCBjdXJyZW50Um90YXRpb24gPSAwO1xuICBsZXQgbmV4dFJhbmRvbSA9IDA7XG4gIGxldCB0aW1lcklkO1xuICBsZXQgc2NvcmUgPSAwO1xuICBsZXQgaXNFbmQgPSBmYWxzZTtcblxuICBjb25zdCBsU2hhcGUgPSBbXG4gICAgWzEsIHdpZHRoKzEsIHdpZHRoKjIrMSwgMl0sXG4gICAgW3dpZHRoLCB3aWR0aCsxLCB3aWR0aCsyLCB3aWR0aCoyKzJdLFxuICAgIFsxLCB3aWR0aCsxLCB3aWR0aCoyKzEsIHdpZHRoKjJdLFxuICAgIFt3aWR0aCwgd2lkdGgqMiwgd2lkdGgqMisxLCB3aWR0aCoyKzJdXG4gIF07XG4gIGNvbnN0IHpTaGFwZSA9IFtcbiAgICBbMCwgd2lkdGgsIHdpZHRoKzEsIHdpZHRoKjIrMV0sXG4gICAgW3dpZHRoKzEsIHdpZHRoKzIsIHdpZHRoKjIsIHdpZHRoKjIrMV0sXG4gICAgWzAsIHdpZHRoLCB3aWR0aCsxLCB3aWR0aCoyKzFdLFxuICAgIFt3aWR0aCsxLCB3aWR0aCsyLCB3aWR0aCoyLCB3aWR0aCoyKzFdXG4gIF07XG4gIGNvbnN0IHRTaGFwZSA9IFtcbiAgICBbMSwgd2lkdGgsIHdpZHRoKzEsIHdpZHRoKzJdLFxuICAgIFsxLCB3aWR0aCsxLCB3aWR0aCsyLCB3aWR0aCoyKzFdLFxuICAgIFt3aWR0aCwgd2lkdGgrMSwgd2lkdGgrMiwgd2lkdGgqMisxXSxcbiAgICBbMSwgd2lkdGgsIHdpZHRoKzEsIHdpZHRoKjIrMV1cbiAgXTtcbiAgY29uc3Qgb1NoYXBlID0gW1xuICAgIFswLCAxLCB3aWR0aCwgd2lkdGgrMV0sXG4gICAgWzAsIDEsIHdpZHRoLCB3aWR0aCsxXSxcbiAgICBbMCwgMSwgd2lkdGgsIHdpZHRoKzFdLFxuICAgIFswLCAxLCB3aWR0aCwgd2lkdGgrMV1cbiAgXTtcbiAgY29uc3QgaVNoYXBlID0gW1xuICAgIFsxLCB3aWR0aCsxLCB3aWR0aCoyKzEsIHdpZHRoKjMrMV0sXG4gICAgW3dpZHRoLCB3aWR0aCsxLCB3aWR0aCsyLCB3aWR0aCszXSxcbiAgICBbMSwgd2lkdGgrMSwgd2lkdGgqMisxLCB3aWR0aCozKzFdLFxuICAgIFt3aWR0aCwgd2lkdGgrMSwgd2lkdGgrMiwgd2lkdGgrM11cbiAgXTtcbiAgY29uc3Qgc2hhcGVzID0gW2xTaGFwZSwgelNoYXBlLCB0U2hhcGUsIG9TaGFwZSwgaVNoYXBlXTtcblxuICAvLyByYW5kb21seSBzZWxlY3Qgc2hhcGVcbiAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNoYXBlcy5sZW5ndGgpO1xuICBsZXQgY3VycmVudCA9IHNoYXBlc1tyYW5kb21dW2N1cnJlbnRSb3RhdGlvbl07XG5cbiAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGNvbnRyb2wpO1xuXG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGlmICh0aW1lcklkKSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVySWQpO1xuICAgICAgdGltZXJJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgY2xlYXJHcmlkKCk7XG4gICAgcmVzZXRHYW1lVmFyaWFibGVzKCk7XG4gICAgZHJhdygpO1xuICAgIHRpbWVySWQgPSBzZXRJbnRlcnZhbChtb3ZlRG93biwgMTAwMCk7XG4gICAgZGlzcGxheVNoYXBlKCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckdyaWQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDA7IGkrKykge1xuICAgICAgc3F1YXJlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdnYW1lX19jZWxsX3Rha2VuJyk7XG4gICAgICBzcXVhcmVzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0R2FtZVZhcmlhYmxlcygpIHtcbiAgICByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZXMubGVuZ3RoKTtcbiAgICBuZXh0UmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2hhcGVzLmxlbmd0aCk7XG4gICAgY3VycmVudFBvc2l0aW9uID0gNDtcbiAgICBjdXJyZW50Um90YXRpb24gPSAwO1xuICAgIGN1cnJlbnQgPSBzaGFwZXNbcmFuZG9tXVtjdXJyZW50Um90YXRpb25dO1xuICAgIHNjb3JlID0gMDtcbiAgICBzY29yZURpc3BsYXkuaW5uZXJIVE1MID0gc2NvcmU7XG4gICAgaXNFbmQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdDZWxsKGluZGV4LCBjb2xvcikge1xuICAgIHNxdWFyZXNbY3VycmVudFBvc2l0aW9uICsgaW5kZXhdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5kcmF3KCkge1xuICAgIGN1cnJlbnQuZm9yRWFjaChpbmRleCA9PiBkcmF3Q2VsbChpbmRleCwgJycpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY3VycmVudC5mb3JFYWNoKGluZGV4ID0+IGRyYXdDZWxsKGluZGV4LCBjb2xvcnNbcmFuZG9tXSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29udHJvbChlKSB7XG4gICAgaWYgKGlzRW5kKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgbW92ZUxlZnQoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgIHJvdGF0ZSgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICBtb3ZlRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vdmUgZG93biBmdW5jdGlvblxuICBmdW5jdGlvbiBtb3ZlRG93bigpIHtcbiAgICB1bmRyYXcoKTtcbiAgICBjdXJyZW50UG9zaXRpb24gKz0gd2lkdGg7XG4gICAgZHJhdygpO1xuICAgIGZyZWV6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZUxlZnQoKSB7XG4gICAgdW5kcmF3KCk7XG4gICAgY29uc3QgaXNBdExlZnRFZGdlID0gY3VycmVudC5zb21lKGluZGV4ID0+IChjdXJyZW50UG9zaXRpb24gKyBpbmRleCkgJSB3aWR0aCA9PT0gMCk7XG4gICAgaWYgKCFpc0F0TGVmdEVkZ2UpIGN1cnJlbnRQb3NpdGlvbiAtPSAxO1xuICAgIGlmIChjdXJyZW50LnNvbWUoaW5kZXggPT4gc3F1YXJlc1tjdXJyZW50UG9zaXRpb24gKyBpbmRleF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdnYW1lX19jZWxsX3Rha2VuJykpKSB7XG4gICAgICBjdXJyZW50UG9zaXRpb24gKz0gMTtcbiAgICB9XG4gICAgZHJhdygpO1xuICB9XG5cbiAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgIHVuZHJhdygpO1xuICAgIGNvbnN0IGlzQXRSaWdodEVkZ2UgPSBjdXJyZW50LnNvbWUoaW5kZXggPT4gKGN1cnJlbnRQb3NpdGlvbiArIGluZGV4KSAlIHdpZHRoID09PSB3aWR0aCAtIDEpO1xuICAgIGlmICghaXNBdFJpZ2h0RWRnZSkgY3VycmVudFBvc2l0aW9uICs9IDE7XG4gICAgaWYgKGN1cnJlbnQuc29tZShpbmRleCA9PiBzcXVhcmVzW2N1cnJlbnRQb3NpdGlvbiArIGluZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVfX2NlbGxfdGFrZW4nKSkpIHtcbiAgICAgIGN1cnJlbnRQb3NpdGlvbiAtPSAxO1xuICAgIH1cbiAgICBkcmF3KCk7XG4gIH1cblxuICBmdW5jdGlvbiBmcmVlemUoKSB7XG4gICAgaWYgKGN1cnJlbnQuc29tZShpbmRleCA9PiBzcXVhcmVzW2N1cnJlbnRQb3NpdGlvbiArIGluZGV4ICsgd2lkdGhdLmNsYXNzTGlzdC5jb250YWlucygnZ2FtZV9fY2VsbF90YWtlbicpKSkge1xuICAgICAgY3VycmVudC5mb3JFYWNoKGluZGV4ID0+IHNxdWFyZXNbY3VycmVudFBvc2l0aW9uICsgaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2dhbWVfX2NlbGxfdGFrZW4nKSk7XG4gICAgICAvLyBzdGFydCBhIG5ldyB0ZXRyb21pbm8gZmFsbGluZ1xuICAgICAgcmFuZG9tID0gbmV4dFJhbmRvbTtcbiAgICAgIG5leHRSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaGFwZXMubGVuZ3RoKTtcbiAgICAgIGN1cnJlbnQgPSBzaGFwZXNbcmFuZG9tXVtjdXJyZW50Um90YXRpb25dO1xuICAgICAgY3VycmVudFBvc2l0aW9uID0gNDtcbiAgICAgIGRyYXcoKTtcbiAgICAgIGRpc3BsYXlTaGFwZSgpO1xuICAgICAgYWRkU2NvcmUoKTtcbiAgICAgIGdhbWVPdmVyKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tSb3RhdGVkUG9zaXRpb24oUCkge1xuICAgIFAgPSBQIHx8IGN1cnJlbnRQb3NpdGlvbjtcbiAgICBpZiAoKFArMSkgJSB3aWR0aCA8IDQpIHtcbiAgICAgIGlmIChjdXJyZW50LnNvbWUoaW5kZXggPT4gKGN1cnJlbnRQb3NpdGlvbiArIGluZGV4ICsgMSkgJSB3aWR0aCA9PT0gMCkpIHtcbiAgICAgICAgY3VycmVudFBvc2l0aW9uICs9IDE7XG4gICAgICAgIGNoZWNrUm90YXRlZFBvc2l0aW9uKFApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoUCAlIHdpZHRoID4gNSkge1xuICAgICAgaWYgKGN1cnJlbnQuc29tZShpbmRleCA9PiAoY3VycmVudFBvc2l0aW9uICsgaW5kZXgpICUgd2lkdGggPT09IDApKSB7XG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbiAtPSAxO1xuICAgICAgICBjaGVja1JvdGF0ZWRQb3NpdGlvbihQKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGUoKSB7XG4gICAgdW5kcmF3KCk7XG4gICAgY3VycmVudFJvdGF0aW9uKys7XG4gICAgaWYgKGN1cnJlbnRSb3RhdGlvbiA9PT0gY3VycmVudC5sZW5ndGgpIHtcbiAgICAgIGN1cnJlbnRSb3RhdGlvbiA9IDA7XG4gICAgfVxuICAgIGN1cnJlbnQgPSBzaGFwZXNbcmFuZG9tXVtjdXJyZW50Um90YXRpb25dO1xuICAgIGNoZWNrUm90YXRlZFBvc2l0aW9uKCk7XG4gICAgZHJhdygpO1xuICB9XG5cbiAgLy8gTmV4dCBzaGFwZSBkaXNwbGF5XG4gIGNvbnN0IG5leHRTaGFwZVNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZV9fbmV4dC13cmFwcGVyIGRpdicpO1xuICBjb25zdCBuZXh0U2hhcGVXaWR0aCA9IDQ7XG4gIGNvbnN0IG5leHRTaGFwZUluZGV4ID0gMDtcblxuICBjb25zdCBuZXh0U2hhcGVzID0gW1xuICAgIFsxLCBuZXh0U2hhcGVXaWR0aCsxLCBuZXh0U2hhcGVXaWR0aCoyKzEsIDJdLFxuICAgIFswLCBuZXh0U2hhcGVXaWR0aCwgbmV4dFNoYXBlV2lkdGgrMSwgbmV4dFNoYXBlV2lkdGgqMisxXSxcbiAgICBbMSwgbmV4dFNoYXBlV2lkdGgsIG5leHRTaGFwZVdpZHRoKzEsIG5leHRTaGFwZVdpZHRoKzJdLFxuICAgIFswLCAxLCBuZXh0U2hhcGVXaWR0aCwgbmV4dFNoYXBlV2lkdGgrMV0sXG4gICAgWzEsIG5leHRTaGFwZVdpZHRoKzEsIG5leHRTaGFwZVdpZHRoKjIrMSwgbmV4dFNoYXBlV2lkdGgqMysxXSxcbiAgXTtcblxuICBmdW5jdGlvbiBkaXNwbGF5U2hhcGUoKSB7XG4gICAgbmV4dFNoYXBlU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgfSk7XG4gICAgbmV4dFNoYXBlc1tuZXh0UmFuZG9tXS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIG5leHRTaGFwZVNxdWFyZXNbbmV4dFNoYXBlSW5kZXggKyBpbmRleF0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3JzW25leHRSYW5kb21dO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2NvcmUoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDA7IGkgKz0gd2lkdGgpIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtpLCBpKzEsIGkrMiwgaSszLCBpKzQsIGkrNSwgaSs2LCBpKzcsIGkrOCwgaSs5XTtcblxuICAgICAgaWYgKHJvdy5ldmVyeShpbmRleCA9PiBzcXVhcmVzW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbWVfX2NlbGxfdGFrZW4nKSkpIHtcbiAgICAgICAgc2NvcmUgKz0gMTA7XG4gICAgICAgIHNjb3JlRGlzcGxheS5pbm5lckhUTUwgPSBzY29yZTtcbiAgICAgICAgcm93LmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgIHNxdWFyZXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWVfX2NlbGxfdGFrZW4nKTtcbiAgICAgICAgICBzcXVhcmVzW2luZGV4XS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHNxdWFyZXNSZW1vdmVkID0gc3F1YXJlcy5zcGxpY2UoaSwgd2lkdGgpO1xuICAgICAgICBzcXVhcmVzID0gc3F1YXJlc1JlbW92ZWQuY29uY2F0KHNxdWFyZXMpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goY2VsbCA9PiBncmlkLmFwcGVuZENoaWxkKGNlbGwpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgICBpZiAoY3VycmVudC5zb21lKGluZGV4ID0+IHNxdWFyZXNbY3VycmVudFBvc2l0aW9uICsgaW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnZ2FtZV9fY2VsbF90YWtlbicpKSkge1xuICAgICAgc2NvcmVEaXNwbGF5LmlubmVySFRNTCA9ICdlbmQnO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklkKTtcbiAgICAgIGlzRW5kID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRpbWVySWQiLCJncmlkIiwicXVlcnlTZWxlY3RvciIsInNxdWFyZXMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwic2NvcmVEaXNwbGF5Iiwic3RhcnRCdG4iLCJ3aWR0aCIsImNvbG9ycyIsImN1cnJlbnRQb3NpdGlvbiIsImN1cnJlbnRSb3RhdGlvbiIsIm5leHRSYW5kb20iLCJzY29yZSIsImlzRW5kIiwic2hhcGVzIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwiY3VycmVudCIsImRyYXdDZWxsIiwiaW5kZXgiLCJjb2xvciIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidW5kcmF3IiwiZm9yRWFjaCIsImRyYXciLCJtb3ZlRG93biIsInNvbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsImRpc3BsYXlTaGFwZSIsImkiLCJyb3ciLCJldmVyeSIsImlubmVySFRNTCIsInJlbW92ZSIsInNxdWFyZXNSZW1vdmVkIiwic3BsaWNlIiwiY29uY2F0IiwiY2VsbCIsImFwcGVuZENoaWxkIiwiYWRkU2NvcmUiLCJjbGVhckludGVydmFsIiwiY2hlY2tSb3RhdGVkUG9zaXRpb24iLCJQIiwiY2xlYXJHcmlkIiwic2V0SW50ZXJ2YWwiLCJlIiwia2V5Q29kZSIsIm5leHRTaGFwZVNxdWFyZXMiLCJuZXh0U2hhcGVJbmRleCIsIm5leHRTaGFwZXMiLCJuZXh0U2hhcGVXaWR0aCIsInNxdWFyZSJdLCJzb3VyY2VSb290IjoiIn0=