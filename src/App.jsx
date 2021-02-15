import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';



function App(){
    var [item , updateItem] = useState('');
    var [item_list ,updateItem_list]=useState([]);
    function itemList(event){
        updateItem(event.target.value);
    }
    function addItem(){
        updateItem_list((prev)=>{
            return [...prev,item]
        });
        updateItem('');
    }
    function delete_item(id){
        updateItem_list((prev) => {
             return prev.filter((element,index)=>{
                 return index!==id;
             })
        })
    }
    return(
        <>
            <div className="main_div">
                    <div className="inner_div">
                        <h1 className="title_head">
                            ToDo List
                        </h1>
                        <input type='text' placeholder='Enter Here' onChange={itemList} value={item}  name="item_list" maxLength='15'/>
                        <Fab color="primary" aria-label="add" style={{marginLeft:'2%'}} onClick={addItem}>
                            <AddIcon/>
                        </Fab>
                        <ul>
                            {item_list.map((element,index) => {
                                if(index<12){
                                   return(
                                       <>
                                        <li className="content">
                                            {element}
                                        <Button style={{padding:'0px',float:'right'}} key={index} onClick={()=>{delete_item(index)}}>
                                            <DeleteIcon className="delete"/>
                                        </Button>
                                        </li> 
                                       </>
                                   )}
                            })}
                        </ul>
                    </div>

            </div>
        </>
    )
}
export default App;