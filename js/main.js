$(document).ready(function(){
  $('#searchUser').on('keyup',function(e){
      let username = e.target.value;


$.ajax({
  url:'https://api.github.com/search/users',

  data:{
    q:username,
    client_id:'6003e35eef69feaade12',
    client_secret:'2cf9a167d99edccf50e14a08083e280f5a2d9946'
  }
}).done(function(user){
 console.log(user);
 for(let i=0;i<29;i++){
  if(i<1){
      $('#profile').html(`
      <div class="panel panel-default">
      <div class="panel-heading">
      <a href=${user.items[i].html_url} target="_blank">
      <h3 class="panel-title" id="userLogin">${user.items[i].login}</h3>
      </a>
      </div>
      </div>
      `);
     }else{
         $('#profile').append(`
      <div class="panel panel-default">
      <div class="panel-heading">
      <a href=${user.items[i].html_url} target="_blank">
      <h3 class="panel-title" id="userLogin">${user.items[i].login}</h3>
      </a>
      </div>
      </div>
      `);     
      }
}
});


  });
});