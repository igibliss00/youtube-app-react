(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),o=a(8),s=a.n(o),l=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a.onInputChange=function(e){a.setState({term:e.target.value})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"videoSearch"},"Video Search"),i.a.createElement("input",{value:this.state.term,onChange:this.onInputChange,type:"text",id:"videoSearch",autoFocus:!0}))))}}]),t}(i.a.Component),h=a(17),b=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyDWuX1aH2hXa4gxF-Vknryfj9HS0Xb_Zd4"}}),E=(a(45),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(E,{key:e.id.videoId,onVideoSelect:a,video:e})});return i.a.createElement("div",{className:"ui relaxed divided list"},n)},w=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"...loading");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a,title:"videoPlayer",frameBorder:"0"})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(l.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("news")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(f,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(S,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(i.a.Component);c.a.render(i.a.createElement(y,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.74a715b2.chunk.js.map