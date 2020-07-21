/*
* 工具函数
* 将数组转换成适合于Transform的数据格式
* */
/**
 *
 * @param array
 * @returns Array
 * @description 将多维数组转为一级数组
 */
export function myFlat(array) {
    try {
        return array.reduce((before, after) => {
            if (Array.isArray(after.children)) {
                return before.concat(after).concat(myFlat(after.children));
            } else {
                return before.concat(after)
            }
        }, [])
    } catch (e) {
        throw new Error(e);
    }
}

/**
 *
 * @param treeNodes   [{...},{...}] 数据源
 * @param checkedKeys [key1,key2,...] 已经选中的key
 * @description 构建树结构
 * @return {array}
 */
export function generateTree(treeNodes, checkedKeys) {
    return treeNodes.map(({children, key, ...props}) => {
        if(Array.isArray(children)){
            return {
                key,
                ...props,
                disabled: checkedKeys.includes(key),
                children: generateTree(children, checkedKeys)
            }
        }else{
            return {
                key,
                ...props,
                disabled: checkedKeys.includes(key),
            }
        }
    })
}

/**
 *
 * @param selectedKeys
 * @param eventKey
 * @returns {boolean}
 */
export function isChecked(selectedKeys, eventKey) {
    return selectedKeys.indexOf(eventKey) !== -1;
}
