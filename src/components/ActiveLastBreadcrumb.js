import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import history from "../history";
function changePage(name) {
    console.log(name)
    if(name === 'Home') {
        history.push('/')
    }
    else if(name === 'Kategorie') {

        history.push('/categories')
    }
}

export default function ActiveLastBreadcrumb(props) {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            {
                props.alldata.map((cat)=>{
                return(
                <Link key={cat.name.toString()} color="inherit"  onClick={()=>changePage(cat.name)}>
                    {cat.name}
                </Link>
                )})
            }
        </Breadcrumbs>
    )
}