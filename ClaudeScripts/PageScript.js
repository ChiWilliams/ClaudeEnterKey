s=new MutationObserver(()=>{this._lastMutation=eR()});
s.observe(F.document.documentElement,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),
F.addEventListener("scroll",e,{passive:!0}),F.addEventListener("click",n,{passive:!0}),this._teardown=()=>{F.removeEventListener("scroll",e),F.removeEventListener("click",n),r(),s.disconnect(),this._clicks=[],this._lastMutation=0,this._lastScroll=0}}removeListeners(){this._teardown&&this._teardown(),this._checkClickTimeout&&clearTimeout(this._checkClickTimeout)}handleClick(t,e){var r,n;if(n=this._ignoreSelector,!ek.includes(e.tagName)||"INPUT"===e.tagName&&!["submit","button"].includes(e.getAttribute("type")||"")||"A"===e.tagName&&(e.hasAttribute("download")||e.hasAttribute("target")&&"_self"!==e.getAttribute("target"))||n&&e.matches(n)||!(t.data&&"number"==typeof t.data.nodeId&&t.timestamp))return;