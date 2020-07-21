/**
 * @author 樊进德
 * @date   2020.07.21
 * @description 树形组件 + table
 */
import React, {useEffect, useState} from "react";
import './TreeTransform.css';
import TransformTree from "./components/TransformTree";
import TransformTable from './components/TransformTable';
import {dataSource1,dataSource2} from './mockData';
// 数据上下文
import treeCtx from './context';
const {Provider} = treeCtx;

function TreeTransform(props) {
    // 模式一中的数据
    const [modelData1,setModelData1] = useState([]);
    // 模式二中的数据
    const [modelData2,setModelData2] = useState([]);
    useEffect(()=>{
        setModelData1(dataSource1);
        setModelData2(dataSource2);
    },[]);
    return (
        <Provider value={{modelData1,modelData2}}>
            <div id='transform-tree'>
                <TransformTree/>
                <TransformTable/>
            </div>
        </Provider>
    )
}

export default TreeTransform;
