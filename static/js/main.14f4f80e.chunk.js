(this["webpackJsonpseng513-assignment-02"]=this["webpackJsonpseng513-assignment-02"]||[]).push([[0],[,function(e,t,a){e.exports={Square:"Square_Square__2mKKd",Flag:"Square_Flag__1attG",Number:"Square_Number__2X87B",Bomb:"Square_Bomb__1yt4_",Empty:"Square_Empty__2DChH"}},,,,,function(e,t,a){e.exports={Canvas:"Canvas_Canvas__1Dk0B",StatusBar:"Canvas_StatusBar__2lBxM",Board:"Canvas_Board__3oX7B"}},,,,,function(e,t,a){e.exports={StatusCell:"StatusCell_StatusCell__1Joh8"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1TS5G"}},function(e,t,a){e.exports={Button:"Button_Button__3tcKB"}},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),u=(a(19),a(2)),l=a(3),i=a(5),d=a(4),c=a(7),m=a(8),f=a.n(m),b=a(6),v=a.n(b),h=a(1),O=a.n(h),B=r.a.memo((function(e){var t=[O.a.Square];!e.revealed&&e.flagged&&t.push(O.a.Flag),e.revealed&&e.numeric&&t.push(O.a.Number),e.revealed&&e.bombed&&t.push(O.a.Bomb),!e.revealed||e.numeric||e.bombed||t.push(O.a.Empty);var a=null,n=null;return e.revealed&&e.numeric&&e.number?(a=e.number,n=function(e){switch(e){case 1:return{color:"#b0e0e6"};case 2:return{color:"#376c9e"};case 3:return{color:"#252577"};case 4:case 5:case 6:case 7:case 8:return{color:"#800000"};default:return{color:"#b0e0e6"}}}(e.number)):e.revealed&&e.bombed?a=r.a.createElement("i",{className:"fas fa-bomb"}):!e.revealed&&e.flagged&&(a=r.a.createElement("i",{className:"fas fa-flag"})),r.a.createElement("div",{className:t.join(" "),style:n,onClick:e.clicked,onContextMenu:e.clicked,onMouseDown:e.mouseDown,onMouseUp:e.mouseUp},a)})),S=a(11),p=a.n(S),g=function(e){return r.a.createElement("div",{className:p.a.StatusCell,style:e.style},e.children)},E=a(12),k=a.n(E),C=function(e){return r.a.createElement("div",{className:k.a.Modal,style:{position:e.fixedPosition?"fixed":"absolute"}},e.children)},_=a(13),q=a.n(_),x=function(e){return r.a.createElement("div",{className:q.a.Button,style:e.style},r.a.createElement("button",{type:"button",onClick:e.clicked},e.children))},w=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(u.a)(this,a),(n=t.call(this)).state={rows:0,columns:0,board:[],squares:0,bombsPoints:[],bombs:0,bombsFound:0,moves:0,time:0,timer:null,firstClick:!0,success:!1,failed:!1},n.calculateRowsAndColumns=function(e,t){if(e<=1e3){return[t/10,10]}var a=Math.floor(e/50);return[t/(a=a>=20?20:a>=10?10:5),a]},n.populateBoard=function(){for(var e=[],t=0;t<n.state.rows;t++){e.push([]);for(var a=0;a<n.state.columns;a++)e[t].push({revealed:!1,flagged:!1})}return e},n.isGameSucceeded=function(){n.state.bombsFound>=n.state.bombs&&(clearInterval(n.state.timer),n.setState({success:!0}))},n.revealAllBombs=function(e){for(var t=0;t<n.state.bombsPoints.length;t++){var a=n.state.bombsPoints[t];e[a[0]][a[1]].flagged=!1,e[a[0]][a[1]].revealed=!0}return e},n.revealSurroundedBombs=function(e,t){for(var a=0,r=0;r<t.length;r++){var s=t[r];e[s[0]][s[1]].revealed||n.isBombSurrounded(e,s[0],s[1])&&(e[s[0]][s[1]].revealed=!0,a++)}return[e,a]},n.isBombSurrounded=function(e,t,a){var r=!0;return r&=n.isEdgeSurrounded(e,t,a,t-1,a),r&=n.isEdgeSurrounded(e,t,a,t+1,a),r&=n.isEdgeSurrounded(e,t,a,t,a-1),r&=n.isEdgeSurrounded(e,t,a,t,a+1)},n.isEdgeSurrounded=function(e,t,a,r,s){if(n.isIndexOutOfBounds(e,r,s)||e[r][s].revealed)return!0;if(!e[r][s].revealed&&e[r][s].bombed){e[t][a].revealed=!0;var o=n.isBombSurrounded(e,r,s);return e[t][a].revealed=!1,o}return!1},n.revealSquare=function(e,t,a){var r=n.adjacentBombCount(e,t,a);return e[t][a].revealed=!0,e[t][a].flagged=!1,0===r?e=n.revealAdjacentSquares(e,t,a):e[t][a].number=r,e},n.revealAdjacentSquares=function(e,t,a){return n.isIndexOutOfBounds(e,t-1,a-1)||e[t-1][a-1].revealed||(e=n.revealSquare(e,t-1,a-1)),n.isIndexOutOfBounds(e,t-1,a)||e[t-1][a].revealed||(e=n.revealSquare(e,t-1,a)),n.isIndexOutOfBounds(e,t-1,a+1)||e[t-1][a+1].revealed||(e=n.revealSquare(e,t-1,a+1)),n.isIndexOutOfBounds(e,t,a-1)||e[t][a-1].revealed||(e=n.revealSquare(e,t,a-1)),n.isIndexOutOfBounds(e,t,a+1)||e[t][a+1].revealed||(e=n.revealSquare(e,t,a+1)),n.isIndexOutOfBounds(e,t+1,a-1)||e[t+1][a-1].revealed||(e=n.revealSquare(e,t+1,a-1)),n.isIndexOutOfBounds(e,t+1,a)||e[t+1][a].revealed||(e=n.revealSquare(e,t+1,a)),n.isIndexOutOfBounds(e,t+1,a+1)||e[t+1][a+1].revealed||(e=n.revealSquare(e,t+1,a+1)),e},n.adjacentBombCount=function(e,t,a){var r=0;return!n.isIndexOutOfBounds(e,t-1,a-1)&&e[t-1][a-1].bombed&&r++,!n.isIndexOutOfBounds(e,t-1,a)&&e[t-1][a].bombed&&r++,!n.isIndexOutOfBounds(e,t-1,a+1)&&e[t-1][a+1].bombed&&r++,!n.isIndexOutOfBounds(e,t,a-1)&&e[t][a-1].bombed&&r++,!n.isIndexOutOfBounds(e,t,a+1)&&e[t][a+1].bombed&&r++,!n.isIndexOutOfBounds(e,t+1,a-1)&&e[t+1][a-1].bombed&&r++,!n.isIndexOutOfBounds(e,t+1,a)&&e[t+1][a].bombed&&r++,!n.isIndexOutOfBounds(e,t+1,a+1)&&e[t+1][a+1].bombed&&r++,r},n.isIndexOutOfBounds=function(e,t,a){return!(t>=0&&t<e.length&&a>=0&&a<e[t].length)},n.handleFirstClick=function(e,t,a){for(var r=[],s=0,o=0,u=0;u<a.length;u++)for(var l=0;l<a[u].length;l++,s++)if(u===e&&l===t)a[u][l].bombed=!1;else{var i=n.randomlyBecomeBomb(n.state.squares,n.state.bombs,s,o);i&&(o++,r.push([u,l])),a[u][l].bombed=i}return[a,r]},n.randomlyBecomeBomb=function(e,t,a,n){if(n<t)return!(e-a>t-n)||1===Math.floor(Math.random()*Math.floor(e/t))+1},n.handleLeftClick=function(e,t){if(!n.state.board[e][t].revealed&&!n.state.board[e][t].flagged){var a=f.a.cloneDeep(n.state.board),r=n.state.bombsPoints;if(n.state.firstClick){var s=n.handleFirstClick(e,t,a),o=Object(c.a)(s,2);a=o[0],r=o[1],n.setState({bombsPoints:r,firstClick:!1})}var u=0;if(a[e][t].bombed)a=n.revealAllBombs(a),clearInterval(n.state.timer);else{a=n.revealSquare(a,e,t);var l=n.revealSurroundedBombs(a,r),i=Object(c.a)(l,2);a=i[0],u=i[1]}n.setState((function(n){return{board:a,failed:a[e][t].bombed,bombsFound:n.bombsFound+u,moves:n.moves+1}}))}},n.handleRightClick=function(e,t){if(!n.state.board[e][t].revealed){var a=f.a.cloneDeep(n.state.board),r=a[e][t];r.flagged=!r.flagged,a[e][t]=r,n.setState({board:a})}},n.squareClickedHandler=function(e,t,a){n.state.success||n.state.failed||("click"===e.type?n.handleLeftClick(t,a):"contextmenu"===e.type&&(e.preventDefault(),n.handleRightClick(t,a)))},n.mouseDownHandler=function(e,t){n.setState({mouseDown:setTimeout((function(){n.state.success||n.state.failed||n.handleRightClick(e,t)}),1e3)})},n.mouseUpHandler=function(){clearTimeout(n.state.mouseDown)};var r=n.calculateRowsAndColumns(window.innerWidth,e.numOfSquares),s=Object(c.a)(r,2);return n.state.rows=s[0],n.state.columns=s[1],n.state.squares=e.numOfSquares,n.state.bombs=e.numOfBombs,n.state.board=n.populateBoard(),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({timer:setInterval((function(){return e.setState((function(e){return{time:e.time+1}}))}),1e3)})}},{key:"componentDidUpdate",value:function(){this.isGameSucceeded()}},{key:"render",value:function(){var e=this,t=null;return this.state.success?t=r.a.createElement(C,{fixedPosition:!0},"You swept all the mines in ",this.state.time,"s with ",this.state.moves," moves!",r.a.createElement(x,{clicked:this.props.restartHandler},"Restart")):this.state.failed&&(t=r.a.createElement(C,{fixedPosition:!0},"Bomb exploded!",r.a.createElement(x,{clicked:this.props.restartHandler},"Restart"))),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:v.a.Canvas},r.a.createElement("div",{className:v.a.StatusBar},r.a.createElement(g,null,this.state.time,"s"),r.a.createElement(g,null,this.state.moves,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-shoe-prints"})),r.a.createElement(g,null,this.state.bombs-this.state.bombsFound,"\xa0\xa0",r.a.createElement("i",{className:"fas fa-bomb"}))),r.a.createElement("div",{className:v.a.Board},this.state.board.map((function(t,a){return r.a.createElement("div",{key:a},t.map((function(t,n){return r.a.createElement(B,{key:a*e.state.rows+n,revealed:t.revealed,numeric:void 0!==t.number,bombed:t.bombed,flagged:t.flagged,number:t.number,clicked:function(t){return e.squareClickedHandler(t,a,n)},mouseDown:function(){return e.mouseDownHandler(a,n)},mouseUp:e.mouseUpHandler})})))})))),t)}}]),a}(n.PureComponent),y=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numOfSquares:null,numOfBombs:null},e.buttonClickedHandler=function(t,a){e.setState({numOfSquares:t,numOfBombs:a})},e.gameRestartHandler=function(){e.setState({numOfSquares:null,numOfBombs:null})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.state.numOfSquares?r.a.createElement(w,{numOfSquares:this.state.numOfSquares,numOfBombs:this.state.numOfBombs,restartHandler:this.gameRestartHandler}):r.a.createElement(C,null,"Please choose the difficulty",r.a.createElement(x,{clicked:function(){return e.buttonClickedHandler(100,10)}},"Easy"),r.a.createElement(x,{clicked:function(){return e.buttonClickedHandler(200,40)}},"Hard"))}}]),a}(n.Component);var I=function(){return r.a.createElement("div",null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.14f4f80e.chunk.js.map