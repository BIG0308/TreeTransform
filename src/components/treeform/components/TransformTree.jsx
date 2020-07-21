/**
 * @author 樊进德
 * @date   2020.07.21
 * @description 树形组件
 */
import React, {useContext, useEffect, useState} from "react";
import {myFlat,generateTree} from '../utils';
import treeCtx from "../context";
import {Button, Transfer} from 'antd';
import MyTree from './MyTree';

function TransformTree(props) {
    // 获取上下文的数据
    const {modelData1, modelData2} = useContext(treeCtx);
    // 树所需要的数据结构
    const treeNodeData = {
        model1:modelData1,
        model2:modelData2,
    };
    // 右侧被选中的数组
    const [targetKeys, setTargetKeys] = useState([]);
    // 数据源所需药的数据结构
    const [dataSource, setDataSource] = useState([]);


    // 展示那个Tree
    const [treeModel, setTreeModel] = useState('model1');
    // 选中的框
    // const [checkedKeys,setCheckedKeys] = useState([]);


    // 模拟componentDidMounted
    useEffect(() => {
        setDataSource(myFlat(modelData1).concat(myFlat(modelData2)));
    }, [modelData1, modelData2]);

    return (
        <Transfer
            dataSource={dataSource}
            targetKeys={targetKeys}
            render={item => item.title}
            showSelectAll={false}
            showSearch={true}
            onChange={(targetKeys )=>{setTargetKeys(targetKeys)}}
            footer={()=>(
                <>
                    <Button onClick={()=>setTreeModel('model1')}>mode1</Button>
                    <Button onClick={()=>setTreeModel('model2')}>mode2</Button>
                </>
            )}
        >
            {
                ({direction, onItemSelect, selectedKeys}) => {
                    let checkedKeys = [...selectedKeys,...targetKeys];
                    if (direction === 'left') {
                        return (
                            <MyTree
                                mode={treeModel}
                                treeData={treeNodeData}
                                itemSelected={onItemSelect}
                                checkedKeys={checkedKeys}
                            />
                        )
                    }
                }
            }
        </Transfer>
    )
}

export default TransformTree;
