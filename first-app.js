const getNotes=require('./notes.json')
const chalk=require('chalk')
const yarg=require('yargs')
const inquirer=require("inquirer")
const fs=require('fs')
inquirer.
prompt([
    {type:'list',name:'Options',message:"Choose what you would like to do",choices:["Add","Remove","Read","List"]}
]).then((answers)=>{checker(answers)})

function input()
{

    inquirer.prompt([
        {type:'input',name:"Title",message:"Add Note Title" },{type:'input',name:'Note_Content',message:"Add Note Content"}
    ]).then((answers)=>{writefile(answers)})
    
}
function writefile(answers){
    const p=fs.readFileSync('notes.json')
    const ob=JSON.parse(p)
    ob.push(answers)
    const k=JSON.stringify(ob,null,' ')
    fs.writeFileSync('notes.JSON',k)
}
function removee(answers)
{
    inquirer.prompt([
        {type:'input',name:"delete",message:"Enter Title of Note to be deleted"}]).then((answers)=>{const po=fs.readFileSync('notes.json')
        let pa=JSON.parse(po)
        console.log(pa[0].Title)
        console.log(answers.delete)
        for (i=0;i<pa.length;i++)
        {
            if(pa[i].Title==answers.delete)
            {
                pa[i].Title=""
                pa[i].Note_Content=""
                const t=JSON.stringify(pa)
                fs.writeFileSync("notes.json",t)
            }
    
        }
    })
    
    

}
function checker(answers)
{
    if(answers.Options=='Add')
    {
        console.log("You chose Add")
        input()
    }
    else if (answers.Options==='Remove'){
        console.log("You chose Remove")
        removee()
        
        
        
        
    }
    else if(answers.Options==='Read')
    {
        
        console.log("You chose Read")
    }
    else if(answers.Options==='List')
    {
        console.log("You chose List")
        
    }
   
    else
    {
        
        
        console.log("Wrong Input")
    }
}
