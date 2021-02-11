function showDataUser(index){
    let getTable = document.getElementById('table-datauser')

    let getTbody = getTable.getElementsByTagName('tbody')[0]

    let tr = ''
    for(let i = 0; i < dataUser.length; i++){
        if(i == index){
            tr += `
                <tr>
                    <td>
                        <center>${i+1}</center>
                    </td> 
                    <td>
                        <center><input type="text" name="user-name" value="${dataUser[index].Username}" class="input-edit"></center>
                    </td>
                    <td>
                        <center><input type="text" name="user-email" value="${dataUser[index].Email}" class="input-edit"></center>
                    </td>
                    <td>
                        <center><select id="role" class="input-edit"><option value="user">user</option><option value="admin">admin</option></select></center>
                    </td>
                    <td>
                        <center>
                            <input type="button" name="button-save" value="Save" onClick="onSaveData(${index})">
                            <input type="button" name="button-cancel" value="Cancel" onClick="showDataUser()">
                        </center>
                    </td>
                </tr> 
            `
        }else{
            tr += `
                <tr>
                    <td>
                        <center>${i+1}</center>
                    </td> 
                    <td>
                        <center>${dataUser[i].Username}</center>
                    </td>
                    <td>
                        <center>${dataUser[i].Email}</center>
                    </td>
                    <td>
                        <center>${dataUser[i].Role}</center>
                    </td>
                    <td>
                        <center>
                            <input type="button" name="button-edit" value="Edit" onClick="editData(${i})">
                            <input type="button" name="button-delete" value="Delete" onClick="deleteDataUser(${i})">
                        </center>
                    </td>
                </tr> 
            `
        }
    }

    getTbody.innerHTML = tr
}
showDataUser()

// 1. ADD DATA USER
// ********* tambah data ***********
function addDataUser(){
    let inputs = document.getElementsByClassName('input-dataUser')
    
    let Username = inputs[0].value
    let Email = inputs[1].value
    let Role = inputs[2].value

    if(Username && Email && Role){
        dataUser.push({
            Username: Username,
            Email: Email,
            Role: Role
        })
        
        showDataUser()

        inputs[0].value = ""
        inputs[1].value = ""
        inputs[2].value = ""
    
    }else{
        let errorMessage = document.getElementById('error-message')
        errorMessage.innerHTML = 'Data Must Be Filled!'
    }
}

document.getElementById('button-submit').addEventListener('click', addDataUser)

// 2. EDIT DATA USER
// ********* Edit Data **************
function editData(i){
    let confirmBox = confirm(`Are you sure want to edit ${dataUser[i].Username}`)

    if(confirmBox){
        showDataUser(i)
    }
}

// ********* Save Product ***************
function onSaveData(index){
    let inputs = document.getElementsByClassName('input-edit')

    let Username = inputs[0].value
    let Email = inputs[1].value
    let Role = inputs[2].value

    if(Username && Email && Role){
        dataUser[index].Username = Username
        dataUser[index].Email = Email
        dataUser[index].Role = Role

        alert('Edit Data Success!')

        showDataUser()
    }
}

// 3. DELETE DATAUSER
// ********** Hapus Product ***************
function deleteDataUser(i){
    let confirmBox = confirm(`Are you sure want to delete data user ${dataUser[i].Username}?`)

    if(confirmBox){
        dataUser.splice(i, 1)
        alert('Delete Data Success!')

        showDataUser()
    }
}
