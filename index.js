
    const context = {
        users: null,
    };
    // async / await
    window.onload= async () => {
       await getUsers();
        renderUsers();
};
    
    const getUsers = async () =>{
        const response =await fetch('https://reqres.in/api/users');
        const data = await response.json();
        const users = data.data; 
        context.users = users;

    }
    const renderUsers = ()=>{
        let listUsers = document.getElementById('list_users')
        console.log(context.users);
        context.users.forEach((user,index) => {
            let fullname = `${user.first_name} ${user.last_name}`
            listUsers.innerHTML+= `<li id = 'user-${index}'> ${fullname} </li>`

    })
}

    const viewInforUsers = ()=>{
       context.users.forEach((user, index) =>{
        let eachUser = document.getElementById(`${i}`);
        eachUser.addEventListener('click',() =>{
            divInfor.innerHTML = '';
            let userInfor = `
            <img src="${user.avatar}">
            <span> First name:</b> ${user.first_name}</span>
            <span> Last name :</b> ${user.last_name}</span>
            <span> Email :</b> ${user.email}</span>`;
            divInfor.innerHTML += userInfor;
         
            
          console.log(user)
        })
     })
    }















