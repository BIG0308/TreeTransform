import React from 'react';
import {Tree} from "antd";
import {generateTree,isChecked} from "../utils";

function  MyTree(props) {
    const {treeData,mode,itemSelected,checkedKeys} = props;
    return (
        <Tree
            blockNode
            checkable
            checkStrictly
            checkedKeys={checkedKeys}
            treeData={generateTree(treeData[mode],[])}
            onCheck={(_,{node:{key}})=>{
                console.log('onCheck',key);
                console.log(!isChecked(checkedKeys,key));
                itemSelected(key,!isChecked(checkedKeys,key))
            }}
            selectable={false}
        />
    )
}
export default MyTree;

